import React, { useEffect } from 'react'
import Section from '../UI/Section'

const About = () => {
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

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div id="about" className="bg-white py-12 md:py-16 lg:py-20">
      <Section>
        <div className="text-center mb-12 md:mb-16 fade-in px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Dukasmart</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">We're transforming how businesses operate with intelligent, user-friendly solutions that drive growth and success in the digital age.</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-16 md:mb-20 px-4 md:px-6">
          
          {/* Innovation Excellence */}
          <div className="bg-purple-950 p-6 md:p-8 lg:p-10 rounded-2xl luxury-card slide-in-left relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 leading-tight">Innovation Excellence</h3>
              <p className="text-purple-100 text-sm leading-relaxed">We create cutting-edge solutions that give your business a competitive advantage.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm leading-relaxed">Pioneering technology solutions for modern business challenges</p>
            </div>
          </div>

          {/* Customer Success */}
          <div className="bg-purple-950 p-6 md:p-8 lg:p-10 rounded-2xl luxury-card scale-in relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 leading-tight">Customer Success</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Your success is our priority. Every feature is designed to help you achieve more.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm leading-relaxed">Dedicated support and solutions tailored to your business needs</p>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="bg-purple-950 p-6 md:p-8 lg:p-10 rounded-2xl luxury-card slide-in-right relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 leading-tight">Quality Assurance</h3>
              <p className="text-purple-100 text-sm leading-relaxed">We deliver premium business tools with uncompromising quality and performance.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm leading-relaxed">Rigorous testing and quality standards for reliable performance</p>
            </div>
          </div>

          {/* Our Story - Large Card */}
          <div className="md:col-span-2 bg-purple-950 p-6 md:p-8 lg:p-10 rounded-2xl luxury-card fade-in relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="max-w-4xl">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 leading-tight">Our Story</h3>
              <p className="text-purple-100 text-sm md:text-base leading-relaxed mb-6 md:mb-8">Founded in 2025, Dukasmart emerged from a simple yet powerful vision: to democratize access to enterprise-level business management tools. We believe every business, regardless of size, deserves sophisticated technology that drives success.</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 transition-all duration-300 hover:bg-white/20">
                <p className="text-purple-200 text-sm md:text-base leading-relaxed">Today, we're proud to serve over 16,000 businesses across 5+ countries, helping them streamline operations, boost productivity, and achieve sustainable growth.</p>
              </div>
            </div>
          </div>

          {/* Global Reach */}
          <div className="bg-purple-950 p-10 rounded-2xl luxury-card slide-in-right relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 leading-tight">Global Reach</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Serving businesses worldwide with localized solutions and 24/7 support.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm leading-relaxed">International presence with local expertise and round-the-clock assistance</p>
            </div>
          </div>

          {/* Security First */}
          <div className="bg-purple-950 p-10 rounded-2xl luxury-card slide-in-left relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 leading-tight">Security First</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Enterprise-grade security protecting your business data with bank-level encryption.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm leading-relaxed">Advanced security protocols ensuring complete data protection and privacy</p>
            </div>
          </div>

          {/* Continuous Growth */}
          <div className="bg-purple-950 p-10 rounded-2xl luxury-card scale-in relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 leading-tight">Continuous Growth</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Constantly evolving our platform to meet the changing needs of modern businesses.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm leading-relaxed">Regular updates and new features based on user feedback and market trends</p>
            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
          <div className="bg-purple-950 rounded-2xl p-4 md:p-6 lg:p-8 text-center text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-purple-200 mb-2 md:mb-3">16K+</div>
            <div className="text-xs md:text-sm text-purple-100 font-medium">Active Users</div>
          </div>
          <div className="bg-purple-950 rounded-2xl p-4 md:p-6 lg:p-8 text-center text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-purple-200 mb-2 md:mb-3">5+</div>
            <div className="text-xs md:text-sm text-purple-100 font-medium">Countries</div>
          </div>
          <div className="bg-purple-950 rounded-2xl p-4 md:p-6 lg:p-8 text-center text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-purple-200 mb-2 md:mb-3">99.9%</div>
            <div className="text-xs md:text-sm text-purple-100 font-medium">Uptime</div>
          </div>
          <div className="bg-purple-950 rounded-2xl p-4 md:p-6 lg:p-8 text-center text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-purple-200 mb-2 md:mb-3">40%</div>
            <div className="text-xs md:text-sm text-purple-100 font-medium">Growth Rate</div>
          </div>
        </div>

      </Section>
    </div>
  )
}

export default About
