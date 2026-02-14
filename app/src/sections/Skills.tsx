import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const Skills = () => {
  const { isVisible, sectionRef } = useRevealOnScroll(0.2)

  const skillGroups = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['React', 'Next.js', 'Node.js', 'Express', 'Flask', 'Tailwind CSS']
    },
    {
      category: 'AI/ML',
      skills: ['NLP', 'BERT', 'RAG', 'LangChain', 'OpenAI API', 'Prompt Engineering']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['Azure', 'AWS', 'Docker', 'Git', 'CI/CD']
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Azure Data Studio']
    }
  ]

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 lg:py-32"
    >
      <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Section Header */}
        <h2 className="heading-md flex items-center mb-12">
          <span className="section-number">05.</span>
          Skills
          <span className="flex-1 h-px bg-navy-lighter ml-6 max-w-[200px]" />
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div key={index}>
              <h3 className="text-slate-lighter font-medium mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skills-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
