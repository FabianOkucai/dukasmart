import React from 'react'
import { 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  Smartphone, 
  Cloud,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

import Section from '../UI/Section'
import FeatureCard from '../UI/FeatureCard'
import MockupBag from '../../assests/MOCKUPS/bag.png'
import MockupWatch from '../../assests/MOCKUPS/WATCH.png'
import MockupTshirt from '../../assests/MOCKUPS/TSHIRT.png'

const Features = () => {
  const mainFeatures = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get deep insights into your business performance with real-time analytics and comprehensive reporting.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, ensuring your business data is always protected.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance that scales with your business, handling thousands of transactions per second.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools that keep your team connected and productive from anywhere.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Native mobile apps for iOS and Android, giving you full control of your business on the go.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamlessly integrate with popular cloud services and third-party applications.',
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const benefits = [
    'Increase productivity by up to 40%',
    'Reduce operational costs by 30%',
    'Improve customer satisfaction',
    'Scale your business efficiently',
    '24/7 customer support',
    'Regular feature updates'
  ]

  return (
    <Section className="py-20 lg:py-32 bg-white/5 backdrop-blur-sm">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium text-white">Powerful Features</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Everything You Need to
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Grow Your Business
          </span>
        </h2>
        
        <p className="text-lg text-white/80 max-w-3xl mx-auto">
          DukaSmart provides a comprehensive suite of tools designed to streamline your operations, 
          boost productivity, and drive sustainable growth for your business.
        </p>
      </div>

      {/* Main Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {mainFeatures.map((feature, index) => (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon className="w-full h-full text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
            <p className="text-white/70 leading-relaxed">{feature.description}</p>
            
            <div className="mt-6 flex items-center text-yellow-400 font-medium group-hover:gap-2 transition-all duration-300">
              Learn more
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Benefits List */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Why Choose DukaSmart?
          </h3>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white/80 text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl">
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Right - Product Mockups */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img 
                src={MockupBag} 
                alt="Product Mockup" 
                className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={MockupWatch} 
                alt="Product Mockup" 
                className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="pt-12">
              <img 
                src={MockupTshirt} 
                alt="Product Mockup" 
                className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-white/70">Uptime</div>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/70">Support</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Features
