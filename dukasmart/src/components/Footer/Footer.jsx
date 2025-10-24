import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Section from '../UI/Section'
import FacebookIcon from '../../assests/social_media_icon/1/linkedin.png'
import TwitterIcon from '../../assests/social_media_icon/1/instagram.png'
import LinkedInIcon from '../../assests/social_media_icon/1/mail.png'
import AppIcon from '../../assests/app_icons/transparent_png/dukasmart_logo_white.png'

const Footer = () => {
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

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <footer className="bg-purple-950 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 left-10 w-24 h-24 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-5 right-10 w-32 h-32 bg-sky-300 rounded-full blur-3xl"></div>
      </div>

      <Section className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          
          {/* Brand Section */}
          <div className="slide-in-left">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={AppIcon} 
                alt="Dukasmart logo" 
                className="w-42 object-contain" 
              />
            </div>
            <p className="text-purple-100 mb-6 max-w-md leading-relaxed">
              Empowering businesses with intelligent management solutions. 
              Transform your operations, boost productivity, and drive sustainable growth.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              <Link to="/coming-soon" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
                <img src={FacebookIcon} alt="Facebook" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
              </Link>
              <Link to="/coming-soon" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
                <img src={TwitterIcon} alt="Twitter" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
              </Link>
              <Link to="/coming-soon" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
                <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="slide-in-right">
            <h3 className="text-xl font-light mb-6 text-sky-300">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-purple-100 text-sm">info@Dukasmart.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-purple-100 text-sm">+254 702 355935</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-purple-100 text-sm">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-purple-800 pt-6 fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-purple-300 text-sm">© 2025 Dukasmart. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-purple-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-purple-300 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/support" className="text-purple-300 hover:text-white transition-colors">Support</Link>
              <Link to="/data-deletion" className="text-purple-300 hover:text-white transition-colors">Request Data Deletion</Link>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  )
}

export default Footer
