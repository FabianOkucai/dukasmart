import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Section from '../UI/Section'
import AppIcon from '../../assests/app_icons/transparent_png/dukasmart_logo.png'
import EmulatorImg1 from '../../assests/emulator/dukasmart.png'
import EmulatorImg2 from '../../assests/emulator/inventory.png'
import EmulatorImg3 from '../../assests/emulator/goodmorning.png'
import EmulatorImg4 from '../../assests/emulator/settings.png'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [transitionType, setTransitionType] = useState(0)
  
  const emulatorImages = [
    { src: EmulatorImg1, alt: "Dukasmart Mobile App" },
    { src: EmulatorImg2, alt: "Dukasmart Inventory" },
    { src: EmulatorImg3, alt: "Dukasmart Dashboard" },
    { src: EmulatorImg4, alt: "Dukasmart Settings" }
  ]

  const transitionEffects = [
    'slide-fade',
    'zoom-rotate',
    'flip-scale',
    'bounce-blur'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % emulatorImages.length)
      setTransitionType((prev) => (prev + 1) % transitionEffects.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [emulatorImages.length, transitionEffects.length])

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

  return (
    <div className="min-h-screen p-4">
      <div className="container-max">
        {/* Navigation */}
        <div className="flex items-center justify-between py-6 mb-8">
          <div className="flex items-center gap-3">
            <img 
              src={AppIcon} 
              alt="Dukasmart logo" 
              className="w-42 object-contain" 
            />
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="text-black hover:text-purple-600 transition-colors">Home</Link>
            <Link to="/about" className="text-black hover:text-purple-600 transition-colors">About</Link>
            <Link to="/services" className="text-black hover:text-purple-600 transition-colors">Services</Link>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors">
              <a href="https://app.dukasmart.com/#/onboarding" target="_blank" rel="noopener noreferrer" className="text-white">Try Web App</a>
            </button>
          </div>
        </div>

        {/* Hero Section with rounded corners */}
        <div className="bg-purple-950 rounded-3xl overflow-hidden absolute left-4 right-4 -mt-12">
          <Section className="py-1 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[8vh] max-w-6xl mx-auto">
              {/* Left Content */}
              <div className="space-y-8 px-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                    A home for your<br></br>
                    <span className="text-orange-300">Business</span>
                  </h1>
                  
                  <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                    Streamline operations, boost productivity, and drive growth with our comprehensive business platform.
                  </p>
                </div>

                <div className="pt-6">
                  <Link 
                    to="/download"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-light transition-colors inline-block text-lg"
                  >
                    Get Mobile App
                  </Link>
                </div>
              </div>

              {/* Right Content - Dynamic Phone Slideshow */}
              <div className="px-8 relative">
                <div className="relative h-[600px] flex items-center justify-center">
                  {/* Background blur effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-orange-100/20 rounded-3xl blur-3xl"></div>
                  
                  {/* Main slideshow container */}
                  <div className="relative w-72 h-[500px]">
                    {emulatorImages.map((image, index) => {
                      const isActive = index === currentImageIndex
                      const isPrev = index === (currentImageIndex - 1 + emulatorImages.length) % emulatorImages.length
                      const isNext = index === (currentImageIndex + 1) % emulatorImages.length
                      
                      let transitionClass = ''
                      
                      // Dynamic transition effects based on transitionType
                      switch(transitionType) {
                        case 0: // slide-fade
                          transitionClass = isActive 
                            ? 'opacity-100 scale-100 translate-x-0 rotate-0 z-20' 
                            : isPrev 
                            ? 'opacity-30 scale-90 -translate-x-20 -rotate-12 z-10'
                            : isNext
                            ? 'opacity-30 scale-90 translate-x-20 rotate-12 z-10'
                            : 'opacity-0 scale-75 translate-y-20 z-0'
                          break
                        case 1: // zoom-rotate
                          transitionClass = isActive 
                            ? 'opacity-100 scale-110 rotate-0 z-20' 
                            : isPrev 
                            ? 'opacity-40 scale-70 -rotate-45 z-10'
                            : isNext
                            ? 'opacity-40 scale-70 rotate-45 z-10'
                            : 'opacity-0 scale-50 rotate-90 z-0'
                          break
                        case 2: // flip-scale
                          transitionClass = isActive 
                            ? 'opacity-100 scale-105 rotateY-0 z-20' 
                            : isPrev 
                            ? 'opacity-35 scale-80 rotateY-60 -translate-x-16 z-10'
                            : isNext
                            ? 'opacity-35 scale-80 rotateY-60 translate-x-16 z-10'
                            : 'opacity-0 scale-60 rotateY-180 z-0'
                          break
                        case 3: // bounce-blur
                          transitionClass = isActive 
                            ? 'opacity-100 scale-100 translate-y-0 blur-0 z-20' 
                            : isPrev 
                            ? 'opacity-50 scale-85 translate-y-8 blur-sm -rotate-20 z-10'
                            : isNext
                            ? 'opacity-50 scale-85 translate-y-8 blur-sm rotate-20 z-10'
                            : 'opacity-0 scale-70 translate-y-16 blur-md z-0'
                          break
                      }
                      
                      return (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-1500 ease-in-out transform ${transitionClass}`}
                          style={{
                            filter: isActive 
                              ? 'drop-shadow(0 25px 50px rgba(147, 51, 234, 0.4))' 
                              : 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2))'
                          }}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto rounded-3xl phone-glow"
                          />
                        </div>
                      )
                    })}
                  </div>

                  {/* Simple indicators */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                    {emulatorImages.map((_, index) => (
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
            </div>
          </Section>
        </div>
        
        {/* Spacer to prevent overlap with next section */}
        <div className="h-32"></div>
      </div>
    </div>
  )
}

export default Hero
