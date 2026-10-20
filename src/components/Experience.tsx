import { certifications, education, timeline } from '../data/content'
import { Section } from './Section'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Research, experience and achievements"
      title="Published, placed, and shipped."
      intro="A research paper, a hackathon placement and a one-month AI internship. Student work is labelled as what it is."
    >
      <ol className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
        {timeline.map((t) => (
          <li key={t.title} className="grid gap-4 bg-ink-2 p-6 sm:grid-cols-[11rem_1fr] sm:p-8">
            <div>
              <span className="chip border-accent/40 text-accent">{t.kind}</span>
              <p className="mt-3 font-mono text-sm text-faint">{t.date}</p>
            </div>
            <div>
              <h3 className="font-display text-xl tracking-tight">{t.title}</h3>
              <p className="mt-1 text-sm text-mute">{t.org}</p>
              <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-mute">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-faint">Education</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {education.map((e) => (
              <li key={e.school} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between">
                <div>
                  <p className="text-paper">{e.school}</p>
                  <p className="text-sm text-mute">{e.detail}</p>
                </div>
                <p className="font-mono text-sm text-faint">{e.date}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-faint">Certifications and courses</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {certifications.map((c) => (
              <li key={c} className="py-3 text-mute">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
