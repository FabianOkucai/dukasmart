import React from 'react'

import Section from '../UI/Section'
import BusinessCard from '../../assests/MOCKUPS/Free_Business_Card_Mockup_3.png'

const CTA = () => {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-600 via-purple-500 to-transparent opacity-80"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <Section className="py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Start Your Journey to
                <span className="block text-purple-600">
                  Business Excellence
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of successful businesses that have transformed 
                their operations with Dukasmart.
              </p>
            </div>

            {/* Numbered Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <span className="text-gray-700">30-day free trial</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <span className="text-gray-700">24/7 customer support</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <span className="text-gray-700">No setup fees</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 text-center"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => document.querySelector('#features').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-purple-300 hover:border-purple-500 text-purple-600 hover:text-purple-700 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 text-center"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative z-10">
            <div className="relative">
              <img 
                src={BusinessCard} 
                alt="Dukasmart Business Solutions" 
                className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white shadow-lg rounded-xl p-4 border border-purple-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">30</div>
                  <div className="text-sm text-gray-600">Days Free</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-xl p-4 border border-sky-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-500">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="py-16 bg-purple-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">106K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">4.9</div>
            <div className="text-gray-600">User Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">50+</div>
            <div className="text-gray-600">Countries</div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default CTA
