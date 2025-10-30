import Image from 'next/image'
import React from 'react'
import ScrollAnimationWrapper from '../UI/ScrollAnimationWrapper'
import HeroCarousel from './HeroCarousel'

import AppIcon from '../../assests/app_icons/transparent_png/dukasmart_logo_white.png'
import EmulatorImg1 from '../../assests/emulator/dukasmart.png'
import EmulatorImg2 from '../../assests/emulator/inventory.png'
import EmulatorImg3 from '../../assests/emulator/goodmorning.png'
import EmulatorImg4 from '../../assests/emulator/settings.png'

/**
 * Hero component - Server-rendered for SEO with progressive enhancement
 * Content is fully rendered on server, carousel is client-side for interactivity
 */
const Hero = () => {
  const emulatorImages = [
    { src: EmulatorImg1, alt: "Dukasmart Mobile App" },
    { src: EmulatorImg2, alt: "Dukasmart Inventory" },
    { src: EmulatorImg3, alt: "Dukasmart Dashboard" },
    { src: EmulatorImg4, alt: "Dukasmart Settings" }
  ]

  return (
    <ScrollAnimationWrapper>
      <div className="min-h-screen bg-purple-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="flex items-center justify-between py-4 md:py-6 mb-4 md:mb-8">
            <div className="flex items-center gap-3">
              <Image
                src={AppIcon}
                alt="Dukasmart logo"
                className="w-32 md:w-40 lg:w-42 object-contain"
                priority
              />
            </div>

            {/* <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-full transition-colors text-sm lg:text-base">
                <a href="https://app.dukasmart.com/" target="_blank" rel="noopener noreferrer" className="text-white">Try Dukasmart</a>
              </button>
            </div> */}

            {/* Mobile menu button */}
            {/* <div className="md:hidden">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-colors text-sm">
                <a href="https://app.dukasmart.com/" target="_blank" rel="noopener noreferrer" className="text-white">Try App</a>
              </button>
            </div> */}
          </div>

          {/* Hero Section with rounded corners */}
          <div className="bg-purple-950 rounded-2xl md:rounded-3xl overflow-hidden -mt-8 md:-mt-12">
          <div className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
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

                  {/* Web App Button for iOS Users */}
                  <a
                    href="https://app.dukasmart.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto justify-center"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-xs opacity-90">TRY FROM</span>
                      <span className="text-base font-semibold -mt-1">Web</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Content - Dynamic Phone Slideshow */}
              <HeroCarousel images={emulatorImages} />
            </div>
          </div>
        </div>

        {/* Spacer to prevent overlap with next section */}
        <div className="h-32"></div>
      </div>
    </div>
    </ScrollAnimationWrapper>
  )
}

export default Hero
