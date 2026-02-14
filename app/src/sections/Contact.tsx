import { Mail, Linkedin, Github } from 'lucide-react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const Contact = () => {
  const { isVisible, sectionRef } = useRevealOnScroll(0.3)

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 lg:py-32 min-h-[60vh] flex flex-col justify-center"
    >
      <div className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Section Number */}
        <p className="text-accent font-mono text-sm mb-4">06. What's Next?</p>

        {/* Heading */}
        <h2 className="heading-lg text-white mb-6">
          Get In Touch
        </h2>

        {/* Description */}
        <p className="body-text max-w-md mx-auto mb-4">
          I'm currently looking for Software Engineering roles and am open to opportunities. Let's connect.
        </p>

        {/* Status */}
        <p className="text-accent font-mono text-sm mb-10">
          OPT-eligible · Available May 2026
        </p>

        {/* Email Button */}
        <a 
          href="mailto:aashishsunar.01@gmail.com"
          className="btn-primary inline-flex items-center gap-2 mb-10"
        >
          <Mail className="w-4 h-4" />
          Say Hello
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://github.com/Aashisho1o1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/aashish-sunar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:aashishsunar.01@gmail.com"
            className="text-slate-light hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Resume Button */}
        <a 
          href="https://example.com/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-mono text-sm hover:underline"
        >
          View Resume
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-16 text-center">
        <p className="text-slate font-mono text-xs">
          Designed & Built by Aashish Dhakal
        </p>
        <p className="text-slate/50 font-mono text-xs mt-1">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </footer>
    </section>
  )
}

export default Contact
