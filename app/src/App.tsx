import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import ChatBot from './sections/ChatBot'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'chatbot', 'skills', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-navy">
      {/* Fixed Left Navigation - Desktop */}
      <div className="hidden lg:block">
        <Navigation activeSection={activeSection} />
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileNav activeSection={activeSection} />
      </div>

      {/* Main Content */}
      <main className="lg:ml-[100px] xl:ml-[150px]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-0">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <ChatBot />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  )
}

// Mobile Navigation Component
function MobileNav({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'chatbot', label: 'Ask My AI' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-navy-lighter">
      <div className="flex items-center justify-between px-6 py-4">
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}
          className="text-accent font-mono text-lg font-bold"
        >
          AD
        </a>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-lighter hover:text-accent transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left py-3 text-sm font-mono transition-colors ${
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

export default App
