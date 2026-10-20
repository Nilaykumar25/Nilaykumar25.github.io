import { useEffect, useRef, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '../data/content'
import { navItems } from '../data/nav'
import { useActiveSection } from '../hooks/useActiveSection'

const ids = navItems.map((n) => n.id)

export function Nav() {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const link = (id: string, label: string, mobile = false) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setOpen(false)}
      aria-current={active === id ? 'true' : undefined}
      className={
        mobile
          ? `flex min-h-12 items-center border-b border-line text-lg ${active === id ? 'text-accent' : 'text-paper'}`
          : `rounded px-3 py-2 text-sm transition-colors hover:text-paper ${active === id ? 'text-paper' : 'text-mute'}`
      }
    >
      {label}
    </a>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg tracking-tight" aria-label={`${profile.name}, home`}>
          Nilay Kumar<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((n) => link(n.id, n.label))}
          <a href={profile.resumeHref} target="_blank" rel="noopener" className="btn-primary ml-3 min-h-10">
            <Download size={15} aria-hidden="true" /> Resume
          </a>
        </div>
        <button
          ref={buttonRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink px-5 pb-6 md:hidden">
          {navItems.map((n) => link(n.id, n.label, true))}
          <a href={profile.resumeHref} target="_blank" rel="noopener" className="btn-primary mt-5 w-full">
            <Download size={16} aria-hidden="true" /> View resume
          </a>
        </div>
      )}
    </header>
  )
}
