import React from 'react'
import Section from '../components/UI/Section'
import BrandPattern from '../assests/brand pattern/transperant png/brand pattern-01.png'

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Brand Pattern Bookmark */}
      <div className="fixed top-20 right-8 z-50 opacity-20">
        <img 
          src={BrandPattern} 
          alt="Dukasmart Brand Pattern" 
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Split background - Purple left, White right */}
      <div className="absolute inset-0">
        <div className="w-1/2 h-full bg-purple-950 absolute left-0 top-0"></div>
        <div className="w-1/2 h-full bg-white absolute right-0 top-0"></div>
      </div>

      {/* Hero Section */}
      <Section className="pt-32 pb-20 relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl lg:text-7xl font-light leading-tight">
            <span className="text-black">Get Started</span> <span className="text-black">Today</span>
          </h1>
          <p className="text-xl text-black font-light leading-relaxed">
            Ready to grow your business with Dukasmart? 
            Contact us and we'll help you get started.
          </p>
        </div>
      </Section>
      
      <Section className="pb-32 relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-light text-black">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-light text-black">Email</h3>
                  <div className="space-y-1">
                    <p className="text-xl text-black font-light">hello@Dukasmart.com</p>
                    <p className="text-xl text-black font-light">support@Dukasmart.com</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-light text-black">Phone</h3>
                  <div className="space-y-1">
                    <p className="text-xl text-black font-light">+254 702 355935</p>
                    <p className="text-xl text-black font-light">+254 800 000 000</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-light text-black">Address</h3>
                  <div className="space-y-1">
                    <p className="text-xl text-black font-light">Nairobi, Kenya</p>
                    <p className="text-xl text-black font-light">East Africa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 pt-12 border-t border-gray-200">
              <h2 className="text-3xl font-light text-black">
                Business Hours
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-lg font-light text-black">Monday - Friday</span>
                  <span className="text-lg font-light text-black">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-lg font-light text-black">Saturday</span>
                  <span className="text-lg font-light text-black">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-lg font-light text-black">Sunday</span>
                  <span className="text-lg font-light text-black">Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="space-y-8">
            <h2 className="text-3xl font-light text-black">
              Send us a Message
            </h2>
            
            <form className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-light text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-b border-gray-300 px-0 py-4 text-lg font-light text-black bg-transparent focus:border-purple-600 focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-light text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-b border-gray-300 px-0 py-4 text-lg font-light text-black bg-transparent focus:border-purple-600 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-light text-black">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border-b border-gray-300 px-0 py-4 text-lg font-light text-black bg-transparent focus:border-purple-600 focus:outline-none transition-colors"
                  placeholder="+254 700 000 000"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-light text-black">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full border-b border-gray-300 px-0 py-4 text-lg font-light text-black bg-transparent focus:border-purple-600 focus:outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="demo">Request a Demo</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-light text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border-b border-gray-300 px-0 py-4 text-lg font-light text-black bg-transparent focus:border-purple-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <div className="pt-8">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-sm font-light tracking-wide uppercase transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-32 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-light text-black">
              Need Quick Help?
            </h3>
            <p className="text-lg text-black font-light">
              Chat with us on WhatsApp for instant support
            </p>
            <a 
              href="https://wa.me/254702355935" 
              className="inline-block border border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-12 py-4 text-sm font-light tracking-wide uppercase transition-all duration-300"
            >
              Start Chat
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Contact
