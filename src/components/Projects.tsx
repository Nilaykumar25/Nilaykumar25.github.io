import { useState } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { Github } from './BrandIcons'
import { profile, projects, type Project } from '../data/content'
import { Flow } from './Flow'
import { Section } from './Section'

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{title}</h4>
      <div className="mt-2 text-[0.95rem] leading-relaxed text-mute">{children}</div>
    </div>
  )
}

function CaseStudy({ p }: { p: Project }) {
  return (
    <div className="space-y-8 border-t border-line pt-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Block title="Problem">{p.problem}</Block>
        <Block title="Approach">{p.approach}</Block>
      </div>
      <div>
        <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">Architecture</h4>
        <Flow nodes={p.architecture} label={`${p.name} architecture`} />
      </div>
      <Block title="Implementation">
        <ul className="space-y-2">
          {p.implementation.map((i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </Block>
      <Block title="Results">
        {p.results.length > 0 && (
          <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {p.results.map((r) => (
              <div key={r.text} className="bg-ink p-4">
                <dt className="font-display text-2xl text-paper">{r.value}</dt>
                <dd className="mt-1 text-sm leading-snug">{r.text}</dd>
              </div>
            ))}
          </dl>
        )}
        {p.resultsNote && <p className="mt-3 text-sm text-faint">{p.resultsNote}</p>}
      </Block>
      <Block title="What I learned">{p.learned}</Block>
    </div>
  )
}

function ProjectCard({ p, defaultOpen }: { p: Project; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = `${p.id}-case-study`
  return (
    <article aria-labelledby={`${p.id}-name`} className="rounded-2xl border border-line bg-ink-2 p-6 transition-colors hover:border-line-strong sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="chip border-accent/40 text-accent">{p.status}</span>
        <span className="text-sm text-faint">{p.statusNote}</span>
      </div>
      <h3 id={`${p.id}-name`} className="mt-4 font-display text-3xl tracking-tight">
        {p.name}
      </h3>
      <p className="mt-3 max-w-3xl text-lg leading-snug text-paper/90">{p.tagline}</p>

      <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.16em] text-faint">Built for</dt>
          <dd className="mt-1 text-mute">{p.users}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.16em] text-faint">My contribution</dt>
          <dd className="mt-1 text-mute">{p.role}</dd>
        </div>
      </dl>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${p.name} technologies`}>
        {p.stack.map((s) => (
          <li key={s} className="chip">
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="btn-ghost"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Hide case study' : 'Read case study'}
          <ChevronDown size={16} aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {p.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            {l.label} <ExternalLink size={14} aria-hidden="true" />
          </a>
        ))}
      </div>

      <div id={panelId} hidden={!open} className="mt-8">
        {open && <CaseStudy p={p} />}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected projects"
      title="Three end-to-end systems, each with a different hard problem."
      intro="Each case study follows the same arc: problem, approach, architecture, implementation, results, and what I took from it. Status labels say whether a project is research or a prototype."
    >
      <div className="space-y-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} defaultOpen={i === 0} />
        ))}
      </div>
      <p className="mt-8 text-sm text-mute">
        More code and experiments on{' '}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-paper underline decoration-line-strong underline-offset-4 hover:text-accent">
          <Github size={14} /> GitHub
        </a>
        .
      </p>
    </Section>
  )
}
