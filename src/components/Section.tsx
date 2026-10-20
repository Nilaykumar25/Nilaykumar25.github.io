import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = { id: string; eyebrow: string; title: string; children: ReactNode; intro?: string }

export function Section({ id, eyebrow, title, intro, children }: Props) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-page px-5 sm:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`} className="section-title mt-3 max-w-3xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-mute">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
