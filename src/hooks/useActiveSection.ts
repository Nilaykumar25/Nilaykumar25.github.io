import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e)
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return active
}
