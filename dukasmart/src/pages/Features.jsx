import React from 'react'
import Section from '../components/UI/Section'
import FeatureCard from '../components/UI/FeatureCard'
import GradientBackground from '../components/UI/GradientBackground'

// Import business card image
import BusinessCard from '../assests/stationary/business card/Business Card-01.jpg'

const Features = () => {
  const features = [
    {
      title: "Real-time Sales Tracking",
      description: "Monitor your daily sales with beautiful charts and analytics. See trends, top products, and revenue insights at a glance.",
      icon: <span className="text-xl">📈</span>,
      details: ["Live sales dashboard", "Revenue analytics", "Product performance", "Customer insights"]
    },
    {
      title: "Smart Inventory Management",
      description: "Never run out of stock again. Get low-stock alerts and manage your inventory across multiple locations.",
      icon: <span className="text-xl">📦</span>,
      details: ["Stock level monitoring", "Automatic reorder alerts", "Multi-location support", "Barcode scanning"]
    },
    {
      title: "Customer Relationship Management",
      description: "Build lasting relationships with your customers. Track purchase history and reward loyalty.",
      icon: <span className="text-xl">🧑‍🤝‍🧑</span>,
      details: ["Customer profiles", "Purchase history", "Loyalty programs", "Marketing campaigns"]
    },
    {
      title: "Multi-Device Access",
      description: "Access your data anywhere, anytime. Works seamlessly on phone, tablet, and desktop.",
      icon: <span className="text-xl">📱</span>,
      details: ["Mobile app", "Web dashboard", "Offline mode", "Cloud sync"]
    },
    {
      title: "Offline-First Design",
      description: "Keep selling even without internet. All data syncs automatically when connection is restored.",
      icon: <span className="text-xl">⚡</span>,
      details: ["Works offline", "Auto-sync", "No data loss", "Reliable performance"]
    },
    {
      title: "Business Intelligence",
      description: "Make informed decisions with actionable insights and comprehensive business reports.",
      icon: <span className="text-xl">🧠</span>,
      details: ["Sales reports", "Profit analysis", "Trend forecasting", "Performance metrics"]
    }
  ]

  return (
    <div className="relative isolate">
      <GradientBackground />
      <Section>
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Powerful Features
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Everything you need to run your retail business efficiently, from inventory to customer management.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="rounded-2xl bg-white/70 p-8 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                    <ul className="mt-4 space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 rounded-2xl border border-gray-100 bg-gradient-to-r from-indigo-600 to-fuchsia-600 p-1">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white/90 px-8 py-12 sm:flex-row">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Branding</h3>
                <p className="mt-2 text-gray-600">
                  Generate beautiful invoices, business cards, and marketing materials with your brand identity.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  <li>• Custom invoice templates</li>
                  <li>• Branded business cards</li>
                  <li>• Marketing materials</li>
                  <li>• Professional letterheads</li>
                </ul>
              </div>
              <img src={BusinessCard} alt="Business card mockup" className="h-32 w-auto rounded-xl object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Features
