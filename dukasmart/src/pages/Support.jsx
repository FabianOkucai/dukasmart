import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/UI/Section'
import AppIcon from '../assests/app icons/Transperent Png/app icons-01.png'

const Support = () => {
  const faqs = [
    {
      question: "How do I get started with DukaSmart?",
      answer: "Download the app from your device's app store, create an account, and follow the setup wizard to configure your business profile. Our onboarding process will guide you through the essential features."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa, credit/debit cards, and bank transfers. All payments are processed securely through our platform."
    },
    {
      question: "Can I use DukaSmart offline?",
      answer: "Yes, DukaSmart has offline functionality. Your data will sync automatically when you're back online."
    },
    {
      question: "How secure is my business data?",
      answer: "We use bank-level encryption and secure cloud storage to protect your data. Our security measures include two-factor authentication and regular security audits."
    },
    {
      question: "Do you offer training?",
      answer: "Yes, we provide free video tutorials, documentation, and live training sessions. Premium users also get access to one-on-one training."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
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
          
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Support Center</h1>
            <p className="text-gray-500 text-sm font-bold mb-4">Last updated: 08/10/2025</p>
            <p className="text-gray-600">
              Get help with DukaSmart. Browse our FAQs or contact our support team.
            </p>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl font-light text-black mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-medium text-black mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

                    {/* Contact Options */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-black mb-3">Email Support</h3>
              <p className="text-gray-600 mb-4">Our support team is here to help you. We typically respond within 24 hours.</p>
              <a 
                href="mailto:info@dukasmart.com?subject=DukaSmart Support Request" 
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                Contact Support
              </a>
              <p className="text-gray-500 text-sm mt-4">
                Email: info@dukasmart.com
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Support