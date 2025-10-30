'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

/**
 * Client-side carousel component for Hero image slideshow
 * Handles image transitions while keeping content SEO-friendly
 */
export default function HeroCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative order-first lg:order-last">
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-orange-100/20 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl"></div>

        {/* Main slideshow container */}
        <div className="relative w-48 h-[320px] md:w-60 md:h-[400px] lg:w-72 lg:h-[500px]">
          {images.map((image, index) => {
            const isActive = index === currentImageIndex

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1500 ease-in-out transform ${
                  isActive
                    ? 'opacity-100 z-20 scale-100 rotate-0 blur-0'
                    : 'opacity-20 z-10 scale-90 rotate-1 blur-sm'
                }`}
                style={{
                  filter: isActive
                    ? 'drop-shadow(0 25px 50px rgba(147, 51, 234, 0.4)) brightness(1.1) saturate(1.2)'
                    : 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1)) brightness(0.8) saturate(0.7)',
                  transform: `${isActive ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.9)'} rotateY(${isActive ? '0deg' : '5deg'})`
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-3xl phone-glow"
                  priority={index === 0}
                />
              </div>
            )
          })}
        </div>

        {/* Simple indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 rounded-full ${
                index === currentImageIndex
                  ? 'bg-orange-500 w-8 h-3 shadow-lg'
                  : 'bg-white/60 w-3 h-3'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
