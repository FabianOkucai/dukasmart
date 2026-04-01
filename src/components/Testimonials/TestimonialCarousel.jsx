'use client'
import { useState } from 'react'

export default function TestimonialCarousel({ testimonials, dark = false }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const navigate = (direction) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) =>
        direction === 'next'
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      )
      setIsTransitioning(false)
    }, 250)
  }

  const goTo = (index) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 250)
  }

  const getVisible = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push({ ...testimonials[index], position: i })
    }
    return visible
  }

  const btnClass = dark
    ? 'bg-white/[0.08] border border-white/[0.08] hover:bg-white/[0.12] text-white/60 hover:text-white'
    : 'bg-white shadow-md hover:shadow-lg text-gray-600'

  return (
    <div className="relative max-w-5xl mx-auto scale-in">
      {/* Nav arrows */}
      <button
        onClick={() => navigate('prev')}
        disabled={isTransitioning}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-10 w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer disabled:opacity-30 ${btnClass}`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => navigate('next')}
        disabled={isTransitioning}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-10 w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer disabled:opacity-30 ${btnClass}`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Cards */}
      <div className="flex items-stretch justify-center gap-4 px-6 md:px-16 overflow-hidden">
        {getVisible().map((testimonial, index) => {
          const isCenter = index === 1
          return (
            <div
              key={`${currentIndex}-${index}`}
              className={`transition-all duration-500 ease-out flex-1 min-w-0 ${
                isCenter ? 'z-20' : 'hidden md:block opacity-40'
              }`}
              style={{
                transform: isCenter ? 'scale(1)' : 'scale(0.96)',
                transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              <div className={`rounded-2xl p-7 h-full flex flex-col ${
                dark
                  ? isCenter
                    ? 'bg-white/[0.08] border border-white/[0.1] backdrop-blur-sm'
                    : 'bg-white/[0.04] border border-white/[0.05]'
                  : isCenter
                    ? 'bg-white shadow-lg border border-gray-100 ring-1 ring-purple-50'
                    : 'bg-white border border-gray-100'
              }`}>
                {/* Quote */}
                <div className={`text-3xl font-display leading-none mb-4 ${
                  dark ? 'text-orange-400/30' : 'text-orange-400/25'
                }`}>&ldquo;</div>

                <p className={`text-[14px] leading-relaxed flex-1 mb-6 ${
                  dark ? 'text-purple-100/60' : 'text-gray-600'
                }`}>
                  {testimonial.text}
                </p>

                <div className={`flex items-center gap-3 pt-4 border-t ${
                  dark ? 'border-white/[0.06]' : 'border-gray-100'
                }`}>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-display ${
                    dark ? 'bg-white/[0.1] text-white' : 'bg-purple-950 text-white'
                  }`}>
                    {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${dark ? 'text-white/80' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </div>
                    <div className={`text-xs ${dark ? 'text-purple-200/40' : 'text-gray-400'}`}>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            disabled={isTransitioning}
            className={`h-2 rounded-full transition-all duration-400 cursor-pointer ${
              index === currentIndex
                ? dark ? 'bg-orange-400 w-7' : 'bg-purple-950 w-7'
                : dark ? 'bg-white/20 hover:bg-white/30 w-2' : 'bg-gray-300 hover:bg-gray-400 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
