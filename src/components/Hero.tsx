import { ArrowDown, FileText, Mail } from 'lucide-react'
import { Github } from './BrandIcons'
import { highlights, profile, projects } from '../data/content'
import { Flow } from './Flow'

export function Hero() {
  const dm = projects[0]
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <p className="eyebrow">AI / ML engineer &middot; B.Tech CS, University of Delhi</p>
        <h1 id="hero-title" className="mt-5 max-w-4xl font-display text-[2.4rem] font-normal leading-[1.08] tracking-tight sm:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute">{profile.intro}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#projects" className="btn-primary">
            Explore my work <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a href={profile.resumeHref} target="_blank" rel="noopener" className="btn-ghost">
            <FileText size={16} aria-hidden="true" /> View resume
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <Github size={16} /> GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="btn-ghost">
            <Mail size={16} aria-hidden="true" /> Email
          </a>
        </div>
        <p className="mt-5 text-sm text-faint">{profile.availability}</p>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.value} className="bg-ink-2 p-5">
              <dt className="font-display text-2xl tracking-tight">{h.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-mute">{h.label}</dd>
            </div>
          ))}
        </dl>

        <figure className="mt-10 pb-20 sm:pb-28">
          <figcaption className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-faint">
            DocuMind pipeline, from sources to audited document
          </figcaption>
          <Flow nodes={dm.architecture} label="DocuMind architecture" />
        </figure>
      </div>
    </section>
  )
}
