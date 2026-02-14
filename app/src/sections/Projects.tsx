import { ExternalLink, Github } from 'lucide-react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const Projects = () => {
  const { isVisible, sectionRef } = useRevealOnScroll(0.1)

  const featuredProjects = [
    {
      name: 'OwenWrites',
      description: 'AI writing companion that helps fiction writers maintain consistent character voices and provides feedback in classic author styles.',
      impact: 'Selected for UCR INNOVAR Entrepreneurship Program · 50+ customer interviews conducted',
      tech: ['React', 'Python', 'OpenAI API', 'LangChain', 'NLP'],
      github: 'https://github.com/Aashisho1o1',
      demo: '#',
      image: 'owenwrites'
    },
    {
      name: 'Alumni Disaster Tracker',
      description: 'Real-time disaster tracking and alert platform for university alumni.',
      impact: 'Serving 2,000+ users across multiple campuses',
      tech: ['React', 'Node.js', 'Azure', 'PostgreSQL'],
      github: 'https://github.com/Aashisho1o1',
      demo: '#',
      image: 'disaster'
    }
  ]

  const otherProjects = [
    {
      name: 'JobSwipe',
      description: 'TikTok-style swipe interface for job analysis and discovery.',
      tech: ['React', 'TypeScript', 'Node.js'],
      github: 'https://github.com/Aashisho1o1',
      demo: '#'
    },
    {
      name: 'Academic Advising Chatbot',
      description: 'AI-powered chatbot for academic advising with trauma-informed design principles.',
      tech: ['Python', 'RAG', 'LangChain', 'Flask'],
      github: 'https://github.com/Aashisho1o1',
      demo: '#'
    },
    {
      name: 'Jewelry E-commerce',
      description: 'Digitized a century-old Nepalese jewelry business with online storefront.',
      impact: '$40K+ revenue generated',
      tech: ['E-commerce', 'TikTok Marketing'],
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 lg:py-32"
    >
      <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Section Header */}
        <h2 className="heading-md flex items-center mb-12">
          <span className="section-number">03.</span>
          Some Things I've Built
          <span className="flex-1 h-px bg-navy-lighter ml-6 max-w-[200px]" />
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent/20 rounded mix-blend-screen group-hover:bg-transparent transition-all duration-300" />
                  <div className="bg-navy-light border border-navy-lighter rounded aspect-video flex items-center justify-center">
                    <span className="text-slate text-sm font-medium">{project.name} Screenshot</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                <p className="text-accent text-sm font-semibold tracking-[0.06em] mb-2">Featured Project</p>
                <h3 className="text-2xl font-semibold text-slate-lighter mb-4">
                  <a 
                    href={project.demo}
                    className="hover:text-accent transition-colors"
                  >
                    {project.name}
                  </a>
                </h3>
                <div className={`bg-navy-light p-6 rounded mb-4 ${index % 2 === 1 ? 'lg:ml-auto' : ''}`}>
                  <p className="body-text mb-2">{project.description}</p>
                  <p className="text-accent text-sm">{project.impact}</p>
                </div>
                <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  {project.tech.map((tech, tIndex) => (
                    <span key={tIndex} className="text-slate-light text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-lighter hover:text-accent transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.demo}
                    className="text-slate-lighter hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <h3 className="text-xl font-semibold text-slate-lighter mb-8 text-center">
          Other Noteworthy Projects
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {otherProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-navy-light p-6 rounded border border-navy-lighter hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold text-slate-lighter hover:text-accent transition-colors">
                  <a href={project.demo}>{project.name}</a>
                </h4>
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.demo}
                    className="text-slate hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="body-text text-sm mb-4">{project.description}</p>
              {project.impact && (
                <p className="text-accent text-xs mb-4">{project.impact}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, tIndex) => (
                  <span key={tIndex} className="text-slate text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Archive Link */}
        <div className="text-center">
          <a 
            href="https://github.com/Aashisho1o1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm font-medium hover:underline inline-flex items-center gap-2"
          >
            View Full Project Archive
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
