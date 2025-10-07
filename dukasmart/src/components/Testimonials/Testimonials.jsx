import React, { useEffect, useState } from 'react'
import Section from '../UI/Section'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
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

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Newton Brian",
      location: "Bungoma, Kenya",
      text: "DukaSmart has made managing my shop much easier, especially with inventory tracking. However, I wish the app loaded a bit faster on my older phone.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jude Ocomil",
      location: "Mumias, Kenya", 
      text: "The sales analytics are really helpful and I like the simple interface. Sometimes the notifications are delayed, but overall it’s a solid tool for my business.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Frankline Karanja",
      location: "Kijabe, Kiambu, Kenya",
      text: "DukaSmart is a game-changer! The app is easy to use and helps me keep track of my sales and stock with zero hassle. Highly recommended for any business owner.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Omae",
      location: "Nairobi, Kenya",
      text: "DukaSmart transformed my business operations completely. The inventory management and sales tracking work seamlessly together for my electronics store.",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ouma Spencer",
      location: "Nairobi, Kenya", 
      text: "The mobile app lets me manage my restaurant from anywhere. Real-time updates and offline functionality are game-changers for my business.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mama Alarm",
      location: "Siwaka, Nairobi, Kenya",
      text: "Customer analytics helped me understand my boutique customers better. Sales increased by 45% in just three months using DukaSmart insights.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ]

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
    <Section className="py-20 bg-gray-50">
      <div className="text-center mb-16 fade-in">
        <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">TESTIMONIALS</div>
        <h2 className="text-4xl font-light text-black mb-4">What Our Client Say!</h2>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
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
                        {testimonial.name.split(' ').map(n => n[0]).join('').slice(0,2)}
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
    </Section>
  )
}

export default Testimonials
