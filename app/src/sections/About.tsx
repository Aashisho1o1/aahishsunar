import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const About = () => {
  const { isVisible, sectionRef } = useRevealOnScroll(0.2)

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 lg:py-32"
    >
      <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Section Header */}
        <h2 className="heading-md flex items-center mb-8">
          <span className="section-number">01.</span>
          About Me
          <span className="flex-1 h-px bg-navy-lighter ml-6 max-w-[200px]" />
        </h2>

        {/* Content */}
        <div className="max-w-3xl">
          <p className="body-text mb-4">
            I'm currently pursuing my MS in Information Systems & Technology (AI-Driven Innovation) at Claremont Graduate University, graduating August 2026. I also worked as a Full Stack Developer 
            (Assistant of Alumni Relations Department) at Soka University of America, building web applications.
          </p>

          <p className="body-text mb-4">
            I co-founded a family jewelry e-commerce business in Nepal that has generated $40,000+ in revenue. 
            As a first-generation college student, I've learned to adapt quickly and solve problems creatively. 
            I'm multilingual — fluent in English, Hindi, and Nepali and a beginner in Mandarin Chinese.
          </p>

          <p className="body-text">
            I'm currently building <span className="text-accent">OwenWrites</span>, an AI writing companion 
            selected for the UCR INNOVAR Entrepreneurship Program. I'm passionate about storytelling and 
            dream of writing a novel while traveling the world.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
