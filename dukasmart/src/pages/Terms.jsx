import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/UI/Section'
import AppIcon from '../assests/app icons/Transperent Png/app icons-01.png'

const Terms = () => {
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
            <h1 className="text-4xl font-bold text-black mb-4">Terms of Service</h1>
            <p className="text-gray-500 text-sm font-bold">Last updated: 08/10/2025</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-light text-black mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing or using DukaSmart's services, you agree to be bound by these Terms of Service
                and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mb-4">2. Service Description</h2>
              <p className="text-gray-600">
                DukaSmart provides business management software solutions, including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-2">
                <li>Inventory management</li>
                <li>Point of sale systems</li>
                <li>Financial reporting</li>
                <li>Customer relationship management</li>
                <li>Analytics and insights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mb-4">3. User Accounts</h2>
              <p className="text-gray-600">
                You are responsible for maintaining the confidentiality of your account credentials
                and for all activities under your account. Notify us immediately of any unauthorized use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mb-4">4. Subscription and Payments</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                <li>All payments are non-refundable unless required by law</li>
                <li>We reserve the right to change pricing with 30 days notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mb-4">5. User Obligations</h2>
              <p className="text-gray-600">
                You agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-2">
                <li>Provide accurate information</li>
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to breach or test system security</li>
                <li>Not resell or distribute the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600">
                All content, features, and functionality of DukaSmart services are owned by
                DukaSmart Limited and are protected by international copyright, trademark, and other
                intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600">
                DukaSmart shall not be liable for any indirect, incidental, special, consequential,
                or punitive damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mb-4">8. Termination</h2>
              <p className="text-gray-600">
                We reserve the right to suspend or terminate your access to our services for any
                violation of these terms or for any other reason at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600">
                We may modify these terms at any time. Continued use of our services after such
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-black mb-4">10. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact:
              </p>
              <p className="text-gray-600 mt-2">
                Email: info@dukasmart.com<br />
                Address: Nairobi, Kenya
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms