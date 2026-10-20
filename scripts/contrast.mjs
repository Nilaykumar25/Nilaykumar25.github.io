// WCAG 2.x contrast ratios for the site's real text/background pairs (tailwind.config.js tokens).
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05) }
const pairs = [
  ['paper on ink', '#ece9e2', '#0a0b0e'], ['mute on ink', '#a1a4b0', '#0a0b0e'], ['mute on ink-2', '#a1a4b0', '#101217'],
  ['faint on ink', '#8b8e9b', '#0a0b0e'], ['faint on ink-2', '#8b8e9b', '#101217'], ['accent on ink', '#7aa2ff', '#0a0b0e'],
  ['accent on ink-2', '#7aa2ff', '#101217'], ['ink on paper (button)', '#0a0b0e', '#ece9e2'], ['ink on accent (hover)', '#0a0b0e', '#7aa2ff'],
]
let bad = 0
for (const [n, f, b] of pairs) { const r = ratio(f, b); const pass = r >= 4.5; if (!pass) bad++; console.log(`${pass ? 'ok  ' : 'FAIL'} ${r.toFixed(2)}:1  ${n}`) }
process.exit(bad ? 1 : 0)
