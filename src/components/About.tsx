import { about } from '../data/content'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Turning messy input into output people can trust.">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-mute">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-faint">Focus areas</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {about.focus.map((f) => (
              <li key={f} className="py-3 text-paper">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
