import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight
} from 'lucide-react'

import Section from '../UI/Section'
import LogoMain from '../../assests/logo files/Dukasmart-files-01.png'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-white/10">
      <Section className="py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={LogoMain} 
                alt="DukaSmart logo" 
                className="h-12 w-12 object-contain rounded-xl shadow-lg bg-white/20 p-1" 
              />
              <span className="text-2xl font-bold text-white">DukaSmart</span>
            </Link>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              Transform your business with intelligent solutions. Get started today and join thousands of successful businesses.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>hello@dukasmart.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a href="https://wa.me/254702355935" className="hover:text-white transition-colors">+254 702 355935</a>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span>Siwaka, NA </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & CTA */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get Started Today</h3>
            <p className="text-white/70 mb-6 text-lg">
              Ready to transform your business? Contact us for a free consultation.
            </p>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center gap-2 mb-6"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Social Links */}
            <div>
              <p className="text-white/70 mb-4">Follow us</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-white/70 text-sm">
              © 2025 DukaSmart. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              <Link to="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/70 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  )
}

export default Footer
