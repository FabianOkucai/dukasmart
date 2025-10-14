import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/UI/Section'
import AppIcon from '../assests/app_icons/transparent_png/dukasmart_logo.png'

const Services = () => {
  const services = [
    {
      title: "Business Analytics",
      description: "Get deep insights into your business performance with advanced analytics tools.",
      features: ["Real-time dashboards", "Custom reports", "Performance metrics"],
      color: "purple"
    },
    {
      title: "Inventory Management", 
      description: "Keep track of stock levels and never run out of best-selling items.",
      features: ["Stock tracking", "Low stock alerts", "Supplier management"],
      color: "blue"
    },
    {
      title: "Customer Management",
      description: "Build stronger relationships with customers and increase loyalty.",
      features: ["Customer profiles", "Purchase history", "Loyalty programs"],
      color: "green"
    },
    {
      title: "Payment Processing",
      description: "Accept payments seamlessly with integrated payment solutions.",
      features: ["Multiple payment methods", "Secure transactions", "Instant settlements"],
      color: "orange"
    },
    {
      title: "Mobile Solutions",
      description: "Manage your business on the go with mobile applications.",
      features: ["iOS & Android apps", "Offline capabilities", "Real-time sync"],
      color: "red"
    },
    {
      title: "Security & Backup",
      description: "Keep business data safe with enterprise-grade security.",
      features: ["256-bit encryption", "Automatic backups", "Data recovery"],
      color: "indigo"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <div className="flex items-center justify-between py-6 mb-8 fade-in">
          <div className="flex items-center gap-3">
            <img 
              src={AppIcon} 
              alt="Dukasmart logo" 
              className="w-40 object-contain" 
            />
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="text-black hover:text-purple-600 transition-colors">Home</Link>
            <Link to="/about" className="text-black hover:text-purple-600 transition-colors">About</Link>
            <Link to="/services" className="text-black hover:text-purple-600 transition-colors">Services</Link>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors">
              <Link to="/download" className="text-white">Get App</Link>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          
          <h1 className="text-5xl font-bold text-black mb-8 text-center">Our Services</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive business solutions designed to help you succeed.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-${service.color}-50 rounded-2xl p-8`}>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
