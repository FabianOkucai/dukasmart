'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import AppIcon from '../../assests/app_icons/transparent_png/dukasmart_logo_white.png'
import EmulatorImg1 from '../../assests/emulator/dukasmart.png'
import EmulatorImg2 from '../../assests/emulator/inventory.png'
import EmulatorImg3 from '../../assests/emulator/goodmorning.png'
import EmulatorImg4 from '../../assests/emulator/settings.png'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const emulatorImages = [
    { src: EmulatorImg1, alt: "Dukasmart Mobile App" },
    { src: EmulatorImg2, alt: "Dukasmart Inventory" },
    { src: EmulatorImg3, alt: "Dukasmart Dashboard" },
    { src: EmulatorImg4, alt: "Dukasmart Settings" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % emulatorImages.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [emulatorImages.length])

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
    <div className="min-h-screen p-4 bg-purple-950">
      <div className="container-max px-4">
        {/* Navigation */}
        <div className="flex items-center justify-between py-4 md:py-6 mb-4 md:mb-8">
          <div className="flex items-center gap-3">
            <Image 
              src={AppIcon} 
              alt="Dukasmart logo" 
              className="w-32 md:w-40 lg:w-42 object-contain" 
            />
          </div>
          
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-full transition-colors text-sm lg:text-base">
              <a href="https://app.dukasmart.com/" target="_blank" rel="noopener noreferrer" className="text-white">Try Dukasmart</a>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-colors text-sm">
              <a href="https://app.dukasmart.com/" target="_blank" rel="noopener noreferrer" className="text-white">Try App</a>
            </button>
          </div>
        </div>

        {/* Hero Section with rounded corners */}
        <div className="bg-purple-950 rounded-2xl md:rounded-3xl overflow-hidden mx-2 md:mx-2 -mt-8 md:-mt-12">
          <div className="py-8 md:py-12 lg:py-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center container-max">
              {/* Left Content */}
              <div className="space-y-6 md:space-y-8 text-center lg:text-left px-6 md:px-8 lg:px-12">
                <div className="space-y-4 md:space-y-6">   
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                    A home for your <span className="text-orange-500"> Business</span>
                    </h1>

                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    Streamline operations, boost productivity, and drive growth 
                    with our comprehensive business platform.
                  </p>
                </div>

                <div className="pt-4 md:pt-6 flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
                  {/* Google Play Button */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.dukasmart.apps&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto justify-center"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-xs opacity-90">GET IT ON</span>
                      <span className="text-base font-semibold -mt-1">Google Play</span>
                    </div>
                  </a>

                  {/* iOS Coming Soon Button */}
                  <button
                    disabled
                    className="bg-gray-700 text-gray-400 px-6 py-3 rounded-lg inline-flex items-center gap-3 cursor-not-allowed opacity-75 w-full sm:w-auto justify-center"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-xs">COMING SOON</span>
                      <span className="text-base font-semibold -mt-1">App Store</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Content - Dynamic Phone Slideshow */}
              <div className="px-4 md:px-8 relative order-first lg:order-last">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                  {/* Background blur effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-orange-100/20 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl"></div>
                  
                  {/* Main slideshow container */}
                  <div className="relative w-48 h-[320px] md:w-60 md:h-[400px] lg:w-72 lg:h-[500px]">
                    {emulatorImages.map((image, index) => {
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
          </div>
        </div>
        
        {/* Spacer to prevent overlap with next section */}
        <div className="h-32"></div>
      </div>
    </div>
  )
}

export default Hero
