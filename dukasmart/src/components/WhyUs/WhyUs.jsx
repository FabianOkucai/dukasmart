import React from 'react'
import ScrollAnimationWrapper from '../UI/ScrollAnimationWrapper'

const WhyUs = () => {
  return (
    <ScrollAnimationWrapper>
      <div id="why-us" className="py-16 md:py-20 border-b border-gray-200/60" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container-max">
          <div className="text-center mb-12 fade-in">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-3 block">Why Dukasmart</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">Built different, on purpose</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 max-w-4xl mx-auto fade-in delay-200">
            {/* Tailored */}
            <div className="flex flex-col items-center text-center px-6 py-8 md:py-6 md:border-r border-gray-200/60 group">
              <div className="w-12 h-12 rounded-full bg-purple-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-400">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </div>
              <h3 className="font-display text-base font-bold text-gray-900 mb-1.5">Tailored to You</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">We learn how you work first, then build around that. You don't adapt to us.</p>
            </div>

            {/* Support */}
            <div className="flex flex-col items-center text-center px-6 py-8 md:py-6 md:border-r border-gray-200/60 border-t md:border-t-0 group">
              <div className="w-12 h-12 rounded-full bg-purple-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-400">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-display text-base font-bold text-gray-900 mb-1.5">Dedicated Support</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">Call us and a person answers. You get an account manager who actually knows your setup.</p>
            </div>

            {/* Mobile */}
            <div className="flex flex-col items-center text-center px-6 py-8 md:py-6 border-t md:border-t-0 group">
              <div className="w-12 h-12 rounded-full bg-purple-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-400">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-base font-bold text-gray-900 mb-1.5">Mobile-First</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">Small app, runs on any phone, works without internet. Check on your business from anywhere.</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  )
}

export default WhyUs
