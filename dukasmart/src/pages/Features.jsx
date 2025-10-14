import React from 'react'
import Section from '../components/UI/Section'
import BusinessCard from '../assests/stationary/business card/Business Card-01.jpg'
import BrandPattern from '../assests/brand pattern/transperant png/brand pattern-01.png'

const Features = () => {
  const features = [
    {
      title: "Real-Time Sales Tracking",
      description: "See your sales data instantly with clear charts and reports. Track your best products and understand your customers better.",
      number: "01",
      details: ["Live sales dashboard", "Revenue reports", "Product performance", "Customer insights"]
    },
    {
      title: "Smart Inventory Management",
      description: "Never run out of stock again. Get alerts when items are low and manage inventory across all your locations.",
      number: "02",
      details: ["Stock level alerts", "Automatic reorder reminders", "Multi-location support", "Barcode scanning"]
    },
    {
      title: "Customer Management",
      description: "Build strong relationships with your customers. Track their purchases and create loyalty programs that keep them coming back.",
      number: "03",
      details: ["Customer profiles", "Purchase history", "Loyalty programs", "Marketing campaigns"]
    },
    {
      title: "Access Anywhere",
      description: "Use Dukasmart on your phone, tablet, or computer. Your data syncs automatically so you can work from anywhere.",
      number: "04",
      details: ["Mobile app", "Web dashboard", "Offline mode", "Cloud sync"]
    },
    {
      title: "Works Without Internet",
      description: "Keep working even when your internet is down. All your data saves automatically and syncs when you're back online.",
      number: "05",
      details: ["Works offline", "Auto-sync", "No data loss", "Reliable performance"]
    },
    {
      title: "Business Reports",
      description: "Make smart decisions with detailed reports. See what's working, what's not, and where to focus your efforts.",
      number: "06",
      details: ["Sales reports", "Profit analysis", "Trend forecasting", "Performance metrics"]
    }
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Brand Pattern Bookmark */}
      <div className="fixed top-20 right-8 z-50 opacity-20">
        <img 
          src={BrandPattern} 
          alt="Dukasmart Brand Pattern" 
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Split background - White left, Purple right */}
      <div className="absolute inset-0">
        <div className="w-1/2 h-full bg-white absolute left-0 top-0"></div>
        <div className="w-1/2 h-full bg-purple-950 absolute right-0 top-0"></div>
      </div>

      {/* Hero Section */}
      <Section className="pt-32 pb-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl lg:text-7xl font-light leading-tight">
            <span className="text-black">Dukasmart</span> <span className="text-black">Features</span>
          </h1>
          <p className="text-xl text-black font-light leading-relaxed">
            Everything you need to run your business better, grow faster, and make more money.
          </p>
        </div>
      </Section>
      
      {/* Features Grid */}
      <Section className="pb-32 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="space-y-6">
              <div className="text-6xl font-light text-purple-600">{feature.number}</div>
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-black">{feature.title}</h3>
                <p className="text-lg text-black font-light leading-relaxed">{feature.description}</p>
                <div className="space-y-3 pt-4">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-lg text-black font-light">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Professional Branding Section */}
        <div className="mt-32 pt-32 border-t border-gray-200">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-light text-black leading-tight">
                Professional Branding
              </h2>
              <p className="text-xl text-black font-light leading-relaxed">
                Create beautiful invoices, business cards, and marketing materials that make your business look professional.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg text-black font-light">Custom invoice templates</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg text-black font-light">Professional business cards</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg text-black font-light">Marketing materials</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg text-black font-light">Professional letterheads</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src={BusinessCard} 
                  alt="Business card mockup" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Features
