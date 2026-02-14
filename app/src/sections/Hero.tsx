import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setIsVisible(true)
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const stats = [
    { value: '2,000+', label: 'Users Served' },
    { value: '$40,000+', label: 'Revenue Generated' },
    { value: '4.0', label: 'GPA' },
    { value: '50+', label: 'Customer Interviews' },
    { value: '4', label: 'Languages Spoken' },
  ]

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center pt-20 lg:pt-0"
    >
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Greeting */}
        <p className="hero-kicker">
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="heading-xl text-white mb-4 font-sans">
          Aashish Sunar
        </h1>

        {/* Title */}
        <h2 className="heading-lg text-slate mb-6">
          Full Stack Developer · AI Builder · MS in IS&T (AI-Driven Innovation)
        </h2>

        {/* Tagline */}
        <p className="body-text max-w-xl mb-10">
          From Nepal's century-old jewelry workshops to building AI-powered writing tools — 
          I ship full-stack products that serve real users.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a 
            href="https://example.com/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Resume
          </a>
          <button 
            onClick={scrollToProjects}
            className="btn-ghost"
          >
            View Projects
          </button>
        </div>

        {/* Stats Strip */}
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div className="text-center">
                <span className="hero-stat-value">{stat.value}</span>
                <span className="text-slate text-xs ml-2">{stat.label}</span>
              </div>
              {index < stats.length - 1 && (
                <span className="hidden sm:block text-navy-lighter mx-4">·</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-12 animate-bounce">
        <ArrowDown className="w-5 h-5 text-accent/50" />
      </div>
    </section>
  )
}

export default Hero
