import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/UI/Section'
import AppIcon from '../assests/app icons/Transperent Png/app icons-01.png'

const About = () => {
  const values = [
    {
      title: "Innovation Excellence",
      description: "We create cutting-edge solutions that give your business a competitive advantage.",
      color: "purple"
    },
    {
      title: "Customer Success", 
      description: "Your success is our priority. Every feature is designed to help you achieve more.",
      color: "blue"
    },
    {
      title: "Quality Assurance",
      description: "We deliver premium business tools with uncompromising quality and performance.",
      color: "green"
    },
    {
      title: "Global Reach",
      description: "Serving businesses worldwide with localized solutions and 24/7 support.",
      color: "orange"
    },
    {
      title: "Security First",
      description: "Enterprise-grade security protecting your business data with bank-level encryption.",
      color: "red"
    },
    {
      title: "Continuous Growth",
      description: "Constantly evolving our platform to meet the changing needs of modern businesses.",
      color: "indigo"
    }
  ]

  const stats = [
    { value: '106K+', label: 'Active Users', color: 'purple' },
    { value: '50+', label: 'Countries', color: 'blue' },
    { value: '99.9%', label: 'Uptime', color: 'green' },
    { value: '40%', label: 'Growth Rate', color: 'orange' }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="mb-8">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src={AppIcon} 
                alt="DukaSmart logo" 
                className="h-12 w-12 object-contain" 
              />
              <span className="text-xl font-light text-black">DukaSmart</span>
            </Link>
          </div>
          
          <h1 className="text-5xl font-light text-black mb-8 text-center">About DukaSmart</h1>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We're transforming how businesses operate with intelligent, user-friendly solutions 
            that drive growth and success in the digital age.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className={`bg-${stat.color}-50 rounded-2xl p-6 text-center`}>
                <div className={`text-3xl font-light text-${stat.color}-600 mb-2`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-black mb-6 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2025, DukaSmart emerged from a simple yet powerful vision: to democratize 
                access to enterprise-level business management tools. We believe every business, 
                regardless of size, deserves sophisticated technology that drives success.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to serve over 106,000 businesses across 50+ countries, helping 
                them streamline operations, boost productivity, and achieve sustainable growth.
              </p>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-black mb-8 text-center">What Drives Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className={`bg-${value.color}-50 rounded-2xl p-8`}>
                  <h3 className="text-2xl font-light text-black mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-light text-black mb-6">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-light text-purple-600">EN</span>
                </div>
                <h3 className="text-xl font-light text-black mb-2">Edwin Nderitu</h3>
                <p className="text-purple-600 text-sm mb-2">CEO & Founder</p>
                <p className="text-gray-600 text-sm">Former Microsoft VP with 15+ years in enterprise software development.</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-light text-blue-600">JO</span>
                </div>
                <h3 className="text-xl font-light text-black mb-2">Jude Ocomil</h3>
                <p className="text-blue-600 text-sm mb-2">CTO & Co-Founder</p>
                <p className="text-gray-600 text-sm">Ex-Google engineer specializing in scalable cloud architecture and AI systems.</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-light text-green-600">FC</span>
                </div>
                <h3 className="text-xl font-light text-black mb-2">Fabian Chief</h3>
                <p className="text-green-600 text-sm mb-2">Design Director</p>
                <p className="text-gray-600 text-sm">Former Apple Inc Lead Developer with expertise in user experience design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
