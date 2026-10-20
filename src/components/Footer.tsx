import { profile } from '../data/content'
import { navItems } from '../data/nav'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-mute">
          &copy; {year} {profile.name}
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-mute hover:text-paper">
              {n.label}
            </a>
          ))}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-mute hover:text-paper">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-mute hover:text-paper">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}
