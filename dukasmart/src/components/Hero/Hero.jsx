import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Section from '../UI/Section'
import AppIcon from '../../assests/app_icons/transparent_png/dukasmart_logo.png'
import EmulatorImg1 from '../../assests/emulator/dukasmart.png'
import EmulatorImg2 from '../../assests/emulator/inventory.png'
import EmulatorImg3 from '../../assests/emulator/goodmorning.png'
import EmulatorImg4 from '../../assests/emulator/settings.png'

const Hero = () => {
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

              {/* Right Content - Phone Mockups */}
              <div className="px-8 relative">
                <div className="relative h-[600px] flex items-center justify-center">
                  {/* Phone 1 - Main left */}
                  <div className="absolute left-0 top-16 phone-float-1">
                    <img 
                      src={EmulatorImg1}
                      alt="Dukasmart Mobile App" 
                      className="w-64 drop-shadow-2xl rounded-3xl"
                    />
                  </div>
                  
                  {/* Phone 2 - Main right */}
                  <div className="absolute right-0 top-8 phone-float-2">
                    <img 
                      src={EmulatorImg2}
                      alt="Dukasmart Inventory" 
                      className="w-64 drop-shadow-2xl rounded-3xl"
                    />
                  </div>

                  {/* Phone 3 - Background left */}
                  <div className="absolute left-16 top-32 phone-float-3 opacity-80">
                    <img 
                      src={EmulatorImg3}
                      alt="Dukasmart Dashboard" 
                      className="w-56 drop-shadow-xl rounded-3xl"
                    />
                  </div>

                  {/* Phone 4 - Background right */}
                  <div className="absolute right-16 top-24 phone-float-4 opacity-80">
                    <img 
                      src={EmulatorImg4}
                      alt="Dukasmart Settings" 
                      className="w-56 drop-shadow-xl rounded-3xl"
                    />
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
