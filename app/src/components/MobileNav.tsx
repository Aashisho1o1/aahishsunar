import { useState } from 'react'
import { NAV_ITEMS } from '../constants/navigation'
import { scrollToSection } from '../utils/scrollToSection'

interface MobileNavProps {
  activeSection: string
}

const MobileNav = ({ activeSection }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-navy-lighter">
      <div className="flex items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('hero') }}
          aria-label="Aashish Sunar — back to top"
          className="text-accent font-sans text-lg font-bold"
        >
          A
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="text-slate-lighter hover:text-accent transition-colors"
        >
          <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-navy-light border-t border-navy-lighter px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              aria-current={activeSection === item.id ? 'true' : undefined}
              className={`block w-full text-left py-3 text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-accent' : 'text-slate-light hover:text-accent'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default MobileNav
