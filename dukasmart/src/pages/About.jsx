import React from 'react'
import { Users, Target, Award, TrendingUp, Heart, Globe } from 'lucide-react'

import Section from '../components/UI/Section'
import TeamMockup from '../assests/MOCKUPS/Stationary.png'
import BrandPattern from '../assests/brand pattern/transperant png/brand pattern-01.png'

const About = () => {
  const stats = [
    { icon: Users, value: '106K+', label: 'Active Users' },
    { icon: Globe, value: '50+', label: 'Countries' },
    { icon: Award, value: '99.9%', label: 'Uptime' },
    { icon: TrendingUp, value: '40%', label: 'Growth Rate' }
  ]

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that transform how businesses operate.'
    },
    {
      icon: Heart,
      title: 'Customer Centric',
      description: 'Every decision we make is guided by our commitment to delivering exceptional value to our customers.'
    },
    {
      icon: Users,
      title: 'Team Excellence',
      description: 'Our diverse team of experts brings together decades of experience in technology and business.'
    }
  ]

  const team = [
    {
      name: 'Edwin Nderitu',
      role: 'CEO & Co-Founder',
      description: 'Former VP at Microsoft with 15+ years in enterprise software.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Jude Ocomil',
      role: 'CTO & Co-Founder',
      description: 'Ex-Google engineer specializing in scalable cloud architecture.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Fabian Chief',
      role: 'Head of Design & Project Manager',
      description: 'Ex Apple Inc Lead Developer and Award-winning designer with expertise in user experience.',
      image: '/api/placeholder/300/300'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src={BrandPattern} 
            alt="Brand Pattern" 
            className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-10"
          />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-white">Our Story</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Empowering Businesses
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Around the World
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Founded in 2025, DukaSmart has grown from a simple idea to a comprehensive platform 
            trusted by thousands of businesses worldwide. Our mission is to democratize access 
            to powerful business tools.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission & Vision
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  To empower businesses of all sizes with intelligent, accessible, and scalable 
                  solutions that drive growth, efficiency, and success in the digital age.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Vision</h3>
                <p className="text-white/80 leading-relaxed">
                  To become the world's most trusted platform for business transformation, 
                  enabling millions of entrepreneurs to build thriving, sustainable enterprises.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={TeamMockup} 
              alt="Team Collaboration" 
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-green-500/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1+</div>
                <div className="text-sm text-white/70">Year</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            These principles guide everything we do and shape the culture we've built at DukaSmart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-white/70 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            The passionate individuals behind DukaSmart's success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-yellow-400 font-medium mb-4">{member.role}</p>
              <p className="text-white/70 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Journey?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Be part of the DukaSmart story and help us transform businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl">
              Join Our Team
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 border border-white/20">
              Partner With Us
            </button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default About
