import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Award } from 'lucide-react'

import Section from '../UI/Section'
import BusinessCard from '../../assests/MOCKUPS/Free_Business_Card_Mockup_3.png'

const CTA = () => {
  return (
    <Section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">Ready to Transform?</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your Journey to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Business Excellence
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
            Join thousands of successful businesses that have transformed their operations with DukaSmart. 
            Start your free trial today and experience the difference.
          </p>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                ))}
              </div>
              <div className="text-white">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span className="font-semibold">106,000+</span>
                </div>
                <div className="text-sm text-white/70">Happy Customers</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-white">
                <div className="font-semibold">4.9/5</div>
                <div className="text-sm text-white/70">Rating</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/features"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 border border-white/20 flex items-center justify-center gap-2"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-white/60 mb-4">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-60">
              <div className="text-white font-semibold">Microsoft</div>
              <div className="text-white font-semibold">Google</div>
              <div className="text-white font-semibold">Amazon</div>
              <div className="text-white font-semibold">Apple</div>
            </div>
          </div>
        </div>

        {/* Right Content - Business Card Mockup */}
        <div className="relative">
          <div className="relative z-10">
            <img 
              src={BusinessCard} 
              alt="DukaSmart Business Solutions" 
              className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-2xl"
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-6 -left-6 bg-green-500/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-pulse z-20">
            <div className="text-center">
              <div className="text-xl font-bold text-white">30-Day</div>
              <div className="text-sm text-white/70">Free Trial</div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-blue-500/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl z-20">
            <div className="text-center">
              <div className="text-xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/70">Support</div>
            </div>
          </div>

          <div className="absolute top-1/2 -left-8 bg-purple-500/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl z-20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">No Setup Fee</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CTA
