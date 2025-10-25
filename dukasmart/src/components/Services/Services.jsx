import React, { useEffect } from 'react'
import Section from '../UI/Section'

const Services = () => {
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
    <div id="services" className="bg-white py-20">
      <Section>
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive business solutions designed to help you succeed.</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          
          {/* Business Analytics */}
          <div className="bg-purple-950 p-10 rounded-2xl luxury-card slide-in-left relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 leading-tight">Business Analytics</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Get deep insights into your business performance with advanced analytics tools.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm leading-relaxed">Real-time dashboards • Custom reports • Performance metrics</p>
            </div>
          </div>

          {/* Inventory Management */}
          <div className="bg-purple-950 p-10 rounded-2xl luxury-card scale-in relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 leading-tight">Inventory Management</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Keep track of stock levels and never run out of best-selling items.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm leading-relaxed">Stock tracking • Low stock alerts • Supplier management</p>
            </div>
          </div>

          {/* Customer Management */}
          <div className="bg-purple-950 p-10 rounded-2xl luxury-card slide-in-right relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 leading-tight">Customer Management</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Build stronger relationships with customers and increase loyalty.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm leading-relaxed">Customer profiles • Purchase history • Loyalty programs</p>
            </div>
          </div>

          {/* Payment Processing - Large Card */}
          <div className="md:col-span-2 bg-purple-950 p-10 rounded-2xl luxury-card fade-in relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="max-w-4xl">
              <h3 className="text-2xl font-semibold mb-6 leading-tight">Payment Processing</h3>
              <p className="text-purple-100 text-base leading-relaxed mb-8">Accept payments seamlessly with integrated payment solutions that support multiple methods and ensure secure transactions.</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20">
                <p className="text-purple-200 text-base leading-relaxed">Multiple payment methods • Secure transactions • Instant settlements • PCI compliance</p>
              </div>
            </div>
          </div>

          {/* Mobile Solutions */}
          <div className="bg-purple-950 p-10 rounded-2xl luxury-card slide-in-right relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 leading-tight">Mobile Solutions</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Manage your business on the go with mobile applications.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm leading-relaxed">iOS & Android apps • Offline capabilities • Real-time sync</p>
            </div>
          </div>

          {/* Security & Backup */}
          <div className="bg-purple-950 p-10 rounded-2xl luxury-card slide-in-left relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 leading-tight">Security & Backup</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Keep business data safe with enterprise-grade security.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm leading-relaxed">256-bit encryption • Automatic backups • Data recovery</p>
            </div>
          </div>

          {/* Support & Training */}
          <div className="bg-purple-950 p-10 rounded-2xl luxury-card scale-in relative overflow-hidden text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 leading-tight">Support & Training</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Get expert help and training to maximize your business potential.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm leading-relaxed">24/7 support • Video tutorials • Live training sessions</p>
            </div>
          </div>

        </div>

      </Section>
    </div>
  )
}

export default Services
