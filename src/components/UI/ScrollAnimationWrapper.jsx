'use client'
import { useEffect } from 'react'

/**
 * Lightweight client component for scroll-triggered animations.
 * Wraps server-rendered content to add progressive enhancement via IntersectionObserver.
 * Content is fully rendered on server for SEO, then enhanced with animations on client.
 */
export default function ScrollAnimationWrapper({ children }) {
  useEffect(() => {
    // Only run on client-side for progressive enhancement
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Children are server-rendered, this component just adds interactivity
  return <>{children}</>
}
