// Smoke + integrity checks that run without a browser:
//  1. App renders on the server without throwing
//  2. every in-page #anchor has a matching id
//  3. axe-core structural/semantic rules pass on the rendered markup
//  4. every local file the site links to exists in /public
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { existsSync } from 'node:fs'
import { JSDOM } from 'jsdom'
import axe from 'axe-core'
import App from '../src/App'

let failures = 0
const fail = (m: string) => { failures++; console.error('FAIL', m) }
const ok = (m: string) => console.log('ok  ', m)

const body = renderToString(createElement(App))
ok(`rendered ${body.length} bytes of HTML`)

const dom = new JSDOM(`<!doctype html><html lang="en"><head><title>t</title></head><body>${body}</body></html>`, { runScripts: 'outside-only' })
const doc = dom.window.document

const anchors = [...doc.querySelectorAll('a[href^="#"]')].map((a) => a.getAttribute('href')!.slice(1))
const missing = anchors.filter((id) => !doc.getElementById(id))
if (missing.length) fail(`anchors with no target: ${[...new Set(missing)].join(', ')}`)
else ok(`${new Set(anchors).size} unique in-page anchors all resolve`)

const local = [...doc.querySelectorAll('a[href^="/"]')].map((a) => a.getAttribute('href')!)
for (const href of new Set(local)) {
  if (existsSync(`public${href}`)) ok(`local file exists: ${href}`)
  else fail(`missing public file: ${href}`)
}

const external = [...doc.querySelectorAll('a[href^="http"]')]
for (const a of external) {
  const rel = a.getAttribute('rel') ?? ''
  if (a.getAttribute('target') === '_blank' && !rel.includes('noopener')) fail(`target=_blank without noopener: ${a.getAttribute('href')}`)
}
ok(`${external.length} external links checked for rel=noopener`)

const h1s = doc.querySelectorAll('h1').length
if (h1s === 1) ok('exactly one <h1>')
else fail(`expected 1 <h1>, found ${h1s}`)

const win = dom.window as unknown as Window & typeof globalThis
const src = (axe as unknown as { source: string }).source
dom.window.eval(src)
const results = await (dom.window as unknown as { axe: typeof axe }).axe.run(win.document, {
  rules: { 'color-contrast': { enabled: false } }, // jsdom has no layout/styles; contrast is checked separately
})
if (results.violations.length === 0) ok(`axe-core: 0 violations across ${results.passes.length} passing rules`)
else results.violations.forEach((v) => fail(`axe ${v.id}: ${v.help} (${v.nodes.length} nodes)`))

if (failures) { console.error(`\n${failures} check(s) failed`); process.exit(1) }
console.log('\nAll checks passed')
