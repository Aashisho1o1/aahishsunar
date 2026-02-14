import { useEffect, useRef, useState } from 'react'

export function useRevealOnScroll(threshold: number) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [threshold])

  return { isVisible, sectionRef }
}
