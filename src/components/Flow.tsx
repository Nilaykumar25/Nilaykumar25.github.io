import type { FlowNode } from '../data/content'

/** Architecture diagram built from the project data: vertical on mobile, horizontal on large screens. */
export function Flow({ nodes, label }: { nodes: FlowNode[]; label: string }) {
  return (
    <ol aria-label={label} className="grid gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-flow-col lg:auto-cols-fr">
      {nodes.map((n, i) => (
        <li key={n.title} className="relative bg-ink-2 p-4">
          <span className="flow-dot font-mono text-[0.7rem] text-accent" style={{ animationDelay: `${i * 0.35}s` }} aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <p className="mt-1 text-sm font-medium">{n.title}</p>
          <p className="mt-1 text-[0.8rem] leading-snug text-mute">{n.detail}</p>
        </li>
      ))}
    </ol>
  )
}
