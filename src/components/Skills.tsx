import { skillGroups } from '../data/content'
import { Section } from './Section'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical skills"
      title="Grouped by what I have actually used them for."
      intro="No percentages. Each group says where the skills show up in my work."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.title} className="bg-ink-2 p-6 sm:p-8">
            <h3 className="font-display text-xl tracking-tight">{g.title}</h3>
            <p className="mt-2 text-sm leading-snug text-mute">{g.evidence}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={g.title}>
              {g.items.map((i) => (
                <li key={i} className="chip">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
