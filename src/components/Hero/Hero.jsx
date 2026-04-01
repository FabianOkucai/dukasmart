import Image from 'next/image'
import React from 'react'
import ScrollAnimationWrapper from '../UI/ScrollAnimationWrapper'
import AppIcon from '../../assests/app_icons/transparent_png/dukasmart_logo_white.png'

const Hero = () => {
  return (
    <ScrollAnimationWrapper>
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #1a0a2e 0%, #2e1065 45%, #1a0a2e 100%)' }}>
        {/* Grain */}
        <div className="grain absolute inset-0" />

        {/* Geometric decorations */}
        <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full border border-white/[0.04] animate-float-slow" />
        <div className="absolute top-48 right-[25%] w-40 h-40 rounded-full border border-orange-500/10 animate-float-slower" />
        <div className="absolute bottom-20 left-[8%] w-80 h-80 rounded-full bg-purple-600/[0.05] blur-3xl" />
        <div className="absolute top-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-orange-400/30" />
        <div className="absolute top-1/4 right-[35%] w-2 h-2 rounded-full bg-white/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Navigation */}
          <nav className="flex items-center justify-between py-6 md:py-8">
            <Image
              src={AppIcon}
              alt="Dukasmart logo"
              className="w-28 md:w-32 object-contain"
              priority
            />
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-[13px] text-purple-200/60 hover:text-white transition-colors duration-300 font-medium tracking-wide">Services</a>
              <a href="#why-us" className="text-[13px] text-purple-200/60 hover:text-white transition-colors duration-300 font-medium tracking-wide">Why Us</a>
              <a href="#testimonials" className="text-[13px] text-purple-200/60 hover:text-white transition-colors duration-300 font-medium tracking-wide">Testimonials</a>
              <a href="#faq" className="text-[13px] text-purple-200/60 hover:text-white transition-colors duration-300 font-medium tracking-wide">FAQ</a>
              <a
                href="https://app.dukasmart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-white px-5 py-2.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300 font-medium"
              >
                Try Web Version
              </a>
              <a
                href="#contact"
                className="text-[13px] bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-orange-500/20"
              >
                Get Started
              </a>
            </div>
            <a href="#contact" className="md:hidden text-[13px] bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
              Get Started
            </a>
          </nav>

          {/* Hero — centered */}
          <div className="text-center pt-20 md:pt-28 lg:pt-36 pb-28 md:pb-36 lg:pb-44 max-w-3xl mx-auto">
            <div className="fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/15 bg-purple-400/[0.05] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-[11px] text-purple-200/70 font-medium tracking-[0.15em] uppercase">Customized business solutions</span>
              </div>
            </div>

            <h1 className="fade-in delay-100 font-display text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-white leading-[1.1] tracking-tight mb-7 text-balance">
              Make Your Business{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-orange-400">Efficient</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-500/20 -skew-x-3 rounded-sm" />
              </span>{' '}
              And Easy To Manage.
            </h1>

            <p className="fade-in delay-200 text-base md:text-lg text-purple-200/50 leading-relaxed max-w-xl mx-auto mb-10">
              Payments, invoicing, bookkeeping, tax filing. We build the systems you need, around the way you already work.
            </p>

            <div className="fade-in delay-300 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-full transition-all duration-300 font-semibold text-sm shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/25"
              >
                Book a Consultation
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://app.dukasmart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-purple-200/60 hover:text-white px-7 py-3.5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 font-medium text-sm hover:bg-white/[0.03]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
                Try Web Version
              </a>
            </div>
          </div>
        </div>

        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/15 to-transparent" />
      </div>
    </ScrollAnimationWrapper>
  )
}

export default Hero
