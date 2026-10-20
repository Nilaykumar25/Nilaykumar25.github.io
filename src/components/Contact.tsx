import { useState } from 'react'
import { Check, Copy, FileText, Mail } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { profile } from '../data/content'
import { Section } from './Section'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <Section id="contact" eyebrow="Contact" title={'Hiring for an AI/ML or software internship, or working on research? Let\u2019s talk.'}>
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <a href={`mailto:${profile.email}`} className="break-all font-display text-2xl tracking-tight underline decoration-line-strong underline-offset-8 hover:text-accent sm:text-4xl">
            {profile.email}
          </a>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={16} aria-hidden="true" /> Send an email
            </a>
            <button type="button" onClick={copy} className="btn-ghost">
              {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy address'}
            </button>
            <span role="status" className="sr-only">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </div>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {[
            { href: profile.github, label: `GitHub, @${profile.githubHandle}`, Icon: Github, external: true },
            { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin, external: true },
            { href: profile.resumeHref, label: 'Resume (PDF)', Icon: FileText, external: true },
          ].map(({ href, label, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex min-h-14 items-center gap-3 text-paper transition-colors hover:text-accent"
              >
                <Icon size={18} /> {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
