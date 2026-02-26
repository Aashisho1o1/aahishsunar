import { ExternalLink } from 'lucide-react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { RESUME_URL } from '../constants/links'

const experiences = [
  {
    period: 'Aug 2024 – Present',
    role: 'Full Stack Developer',
    company: 'Soka University of America',
    companyUrl: 'https://www.soka.edu',
    bullets: [
      'Built and maintained university web applications serving 2,000+ students and faculty',
      'Developed disaster monitoring system with NASA EONET API integration for real-time alerts',
      'Implemented geospatial analysis reducing emergency response time by 95%'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Azure', 'Docker']
  },
  {
    period: 'Aug 2025 – Present',
    role: 'AI Chatbot Developer',
    company: 'CISAT, Claremont Graduate University',
    companyUrl: 'https://www.cgu.edu',
    bullets: [
      'Developing academic advising chatbot under Professor Itamar Shabtai',
      'Built RAG pipeline with LangChain for context-aware responses',
      'Implemented NLP techniques for understanding student queries'
    ],
    tech: ['Python', 'LangChain', 'OpenAI API', 'RAG', 'Flask']
  },
  {
    period: 'Jan 2023 – Present',
    role: 'Co-Founder',
    company: 'Jewelry E-commerce Business, Nepal',
    companyUrl: null,
    bullets: [
      'Modernized century-old family business through e-commerce and TikTok marketing',
      'Generated $40,000+ revenue targeting young Nepalese women',
      'Managed product photography, inventory, and customer relations'
    ],
    tech: ['E-commerce', 'TikTok Marketing', 'Product Photography']
  }
]

const Experience = () => {
  const { isVisible, sectionRef } = useRevealOnScroll(0.1)

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 lg:py-32"
    >
      <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Section Header */}
        <h2 className="heading-md flex items-center mb-12">
          <span className="section-number">02.</span>
          Where I've Worked
          <span className="flex-1 h-px bg-navy-lighter ml-6 max-w-[200px]" />
        </h2>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="group grid md:grid-cols-[140px_1fr] gap-4 md:gap-8"
            >
              {/* Date */}
              <div className="text-slate text-sm font-medium tracking-[0.04em]">
                {exp.period}
              </div>

              {/* Content */}
              <div>
                {/* Role & Company */}
                <h3 className="text-xl font-medium text-slate-lighter mb-2">
                  {exp.role}{' '}
                  <span className="text-slate/70">|</span>{' '}
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline inline-flex items-center gap-1"
                    >
                      {exp.company}
                      <ExternalLink aria-hidden="true" className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-accent">{exp.company}</span>
                  )}
                </h3>

                {/* Bullets */}
                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="body-text flex items-baseline"
                    >
                      <span className="text-accent mr-2 shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Resume Link */}
        <div className="mt-12">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm font-medium hover:underline inline-flex items-center gap-2"
          >
            View Full Resume
            <ExternalLink aria-hidden="true" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience
