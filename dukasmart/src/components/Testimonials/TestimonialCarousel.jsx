'use client'
import { useState } from 'react'

/**
 * Client-side carousel component for Testimonials
 * Handles interactive carousel logic while keeping content SEO-friendly
 */
export default function TestimonialCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextTestimonial = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setIsTransitioning(false)
    }, 300)
  }

  const prevTestimonial = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsTransitioning(false)
    }, 300)
  }

  const goToTestimonial = (index) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 300)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push({ ...testimonials[index], position: i })
    }
    return visible
  }

  return (
    <div className="relative max-w-4xl mx-auto scale-in">
      {/* Navigation Arrows */}
      <button
        onClick={prevTestimonial}
        disabled={isTransitioning}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 flex items-center justify-center group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextTestimonial}
        disabled={isTransitioning}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 flex items-center justify-center group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Testimonials Container */}
      <div className="flex items-center justify-center gap-8 px-16 overflow-hidden">
        {getVisibleTestimonials().map((testimonial, index) => (
          <div
            key={`${currentIndex}-${index}`}
            className={`transition-all duration-700 ease-in-out transform ${
              isTransitioning
                ? index === 1
                  ? 'scale-95 opacity-60 blur-sm'
                  : 'scale-85 opacity-40 blur-md'
                : index === 1
                  ? 'scale-110 z-20 shadow-2xl'
                  : 'scale-90 opacity-70 hover:opacity-90 hover:scale-95'
            }`}
            style={{
              transform: `${
                isTransitioning
                  ? `translateX(${index === 0 ? '-20px' : index === 2 ? '20px' : '0'}) scale(${index === 1 ? '0.95' : '0.85'})`
                  : `translateX(0) scale(${index === 1 ? '1.1' : '0.9'})`
              }`,
              filter: isTransitioning ? `blur(${index === 1 ? '2px' : '4px'})` : 'blur(0)',
              transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className={`bg-white p-8 rounded-2xl shadow-lg max-w-sm relative overflow-hidden ${
              index === 1 ? 'ring-2 ring-purple-200 shadow-purple-100' : ''
            }`}>
              {/* Gradient overlay for center card */}
              {index === 1 && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 pointer-events-none"></div>
              )}

              <div className="relative z-10">
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-lg uppercase select-none transition-all duration-500 ${
                        index === 1 ? 'ring-2 ring-purple-300 shadow-lg' : ''
                      } bg-purple-950`}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    {index === 1 && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 animate-pulse"></div>
                    )}
                  </div>
                  <div>
                    <div className={`font-medium text-gray-900 text-sm transition-colors duration-300 ${
                      index === 1 ? 'text-purple-900' : ''
                    }`}>
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-xs">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            disabled={isTransitioning}
            className={`h-3 rounded-full transition-all duration-500 cursor-pointer disabled:cursor-not-allowed ${
              index === currentIndex
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 w-8 shadow-lg'
                : 'bg-gray-300 hover:bg-gray-400 w-3 hover:w-6'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
