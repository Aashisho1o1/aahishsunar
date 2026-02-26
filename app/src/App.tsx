import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import MobileNav from './components/MobileNav'
import { SCROLL_SECTIONS } from './constants/navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import ChatBot from './sections/ChatBot'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

function App() {
  const [activeSection, setActiveSection] = useState(SCROLL_SECTIONS[0])

  useEffect(() => {
    const hasScrollRestoration = 'scrollRestoration' in window.history
    if (hasScrollRestoration) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    return () => {
      if (hasScrollRestoration) {
        window.history.scrollRestoration = 'auto'
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of SCROLL_SECTIONS) {
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

export default App
