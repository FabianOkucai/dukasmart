import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Section from '../UI/Section'
// import AppIcon1 from '../../assests/app_icons/transparent_png/app_icons-01.png'
// import AppIcon2 from '../../assests/app_icons/transparent_png/app_icons-02.png'
// import AppIcon3 from '../../assests/app_icons/transparent_png/app_icons-03.png'
// import AppIcon4 from '../../assests/app_icons/transparent_png/app_icons-04.png'
import AppIcon from '../../assests/app_icons/transparent_png/dukasmart_logo.png'

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
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="flex items-center justify-between py-6 mb-8 fade-in">
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
              <Link to="/download" className="text-white">Get App</Link>
            </button>
          </div>
        </div>

        {/* Hero Section with rounded corners */}
        <div className="bg-purple-950 rounded-3xl overflow-hidden slide-in-left">
          <Section className="pt-8 pb-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[60vh]">
              {/* Left Content */}
              <div className="space-y-6 px-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-4xl font-bold text-white leading-tight">
                    A home for your<br></br>
                    <span className="text-orange-300">Business</span>
                  </h1>
                  
                  <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
                    Streamline operations, boost productivity, and drive growth with our comprehensive business platform.
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button 
                    onClick={() => document.querySelector('#features').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-light transition-all duration-300 inline-block btn-animate pulse-hover"
                  >
                    Explore Features
                  </button>
                  <div className="bounce cursor-pointer" onClick={() => document.querySelector('#features').scrollIntoView({ behavior: 'smooth' })}>
                    <svg className="w-6 h-6 text-orange-300 hover:text-orange-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Content - Phone Mockups */}
              <div className="px-8 relative">
                <div className="relative h-[500px]">
                  {/* Main phone - tilted left */}
                  <div className="absolute left-8 top-0 z-30 transform -rotate-12 float">
                    <img 
                      src=""
                      alt="Dukasmart Mobile App" 
                      className="w-60 drop-shadow-2xl rounded-3xl"
                    />
                  </div>
                  
                  {/* Second phone mockup with app_icons - tilted right */}
                  <div className="absolute right-0 top-8 z-20 transform rotate-12">
                    <div className="w-52 h-[400px] bg-white rounded-3xl shadow-2xl p-5">
                      <div className="space-y-4">
                        <div className="text-center">
                          <h3 className="text-base font-light text-black mb-3">Dukasmart Suite</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-50 p-3 rounded-xl text-center">
                            <img src="" alt="Business App" className="w-10 h-10 mx-auto mb-1" />
                            <span className="text-xs text-gray-600">Business</span>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-xl text-center">
                            <img src="" alt="Sales App" className="w-10 h-10 mx-auto mb-1" />
                            <span className="text-xs text-gray-600">Sales</span>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-xl text-center">
                            <img src="" alt="Reports App" className="w-10 h-10 mx-auto mb-1" />
                            <span className="text-xs text-gray-600">Reports</span>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-xl text-center">
                            <img src="" alt="Analytics App" className="w-10 h-10 mx-auto mb-1" />
                            <span className="text-xs text-gray-600">Analytics</span>
                          </div>
                        </div>
                        <div className="text-center pt-2">
                          <div className="text-sm text-gray-500">Complete solution</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Watch mockup - bottom center */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
                    <img 
                      src=""
                      alt="Dukasmart Watch" 
                      className="w-32 drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}

export default Hero
