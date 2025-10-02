import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Star, Users, TrendingUp } from 'lucide-react'

import Section from '../UI/Section'
import MobileApp from '../../assests/MOCKUPS/mobile on rock.png'
import AppIcon from '../../assests/app icons/Transperent Png/app icons-01.png'

const Hero = () => {
  return (
    <Section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-white">Trusted by 106,000+ businesses</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Smart Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Management
            </span>
            Made Simple
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
            Transform your business operations with DukaSmart's intelligent platform. 
            Streamline processes, boost productivity, and drive growth with our comprehensive solution.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold text-white mb-1">
                <Users className="w-6 h-6 text-yellow-400" />
                106K+
              </div>
              <p className="text-sm text-white/70">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold text-white mb-1">
                <TrendingUp className="w-6 h-6 text-green-400" />
                98%
              </div>
              <p className="text-sm text-white/70">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold text-white mb-1">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                4.9
              </div>
              <p className="text-sm text-white/70">User Rating</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/contact"
              className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 border border-white/20 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Content - Mobile Mockup */}
        <div className="relative z-10">
          <div className="relative">
            <img 
              src={MobileApp} 
              alt="DukaSmart Mobile App" 
              className="w-full max-w-md mx-auto drop-shadow-2xl relative z-20"
            />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 -left-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-bounce z-30">
            <img src={AppIcon} alt="App Icon" className="w-12 h-12" />
          </div>
          
          <div className="absolute bottom-20 -right-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl z-30">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/70">Features</div>
            </div>
          </div>

          <div className="absolute top-1/2 -right-8 bg-green-500/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl z-30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">Live Updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
