import { Github, Linkedin, Mail } from 'lucide-react'
import { NAV_ITEMS } from '../constants/navigation'
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '../constants/links'
import { scrollToSection } from '../utils/scrollToSection'

interface NavigationProps {
  activeSection: string
}

const Navigation = ({ activeSection }: NavigationProps) => {
  return (
    <aside aria-label="Main navigation" className="fixed left-0 top-0 h-screen w-[100px] xl:w-[150px] bg-navy border-r border-navy-lighter/30 flex flex-col justify-between py-8 z-50">
      {/* Logo */}
      <div className="px-6">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}
          aria-label="Aashish Sunar — back to top"
          className="text-accent font-sans text-2xl font-bold hover:text-white transition-colors"
        >
          A
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col justify-center px-6">
        <ul className="space-y-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? 'true' : undefined}
                className={`group flex items-center text-left transition-all duration-300 ${
                  activeSection === item.id ? 'text-accent' : 'text-slate-light hover:text-accent'
                }`}
              >
                <span className="text-xs mr-3 text-accent/50 font-semibold tracking-[0.08em] group-hover:text-accent">
                  {item.number}.
                </span>
                <span className="text-sm font-medium">{item.label}</span>
                {activeSection === item.id && (
                  <span className="ml-auto w-1 h-1 bg-accent rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="px-6">
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-light hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github aria-hidden="true" className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-light hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin aria-hidden="true" className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="text-slate-light hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail aria-hidden="true" className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Navigation
