import { Mail, Linkedin, Github } from 'lucide-react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { GITHUB_URL, LINKEDIN_URL, EMAIL, RESUME_URL } from '../constants/links'

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
        <p className="text-accent text-sm font-semibold tracking-[0.08em] mb-4">06. What's Next?</p>

        {/* Heading */}
        <h2 className="heading-lg text-white mb-6">
          Get In Touch
        </h2>

        {/* Description */}
        <p className="body-text max-w-md mx-auto mb-4">
          I'm currently looking for Software Engineering roles and am open to opportunities. Let's connect.
        </p>

        {/* Status */}
        <p className="text-accent/90 text-sm md:text-base font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
          CPT/OPT-eligible · No visa sponsorship required · Available for jobs/internships
        </p>

        {/* Email Button */}
        <a
          href={`mailto:${EMAIL}`}
          className="btn-primary inline-flex items-center gap-2 mb-10"
        >
          <Mail aria-hidden="true" className="w-4 h-4" />
          Say Hello
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github aria-hidden="true" className="w-6 h-6" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin aria-hidden="true" className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-slate-light hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail aria-hidden="true" className="w-6 h-6" />
          </a>
        </div>

        {/* Resume Button */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent text-sm font-medium hover:underline"
        >
          View Resume
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-16 text-center">
        <p className="text-slate text-sm font-medium">
          Designed & Built by Aashish Sunar
        </p>
        <p className="text-slate/60 text-sm mt-1">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </footer>
    </section>
  )
}

export default Contact
