import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/UI/Section'
import AppIcon from '../assests/app_icons/transparent_png/dukasmart_logo.png'

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="mb-8">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src={AppIcon} 
                alt="Dukasmart logo" 
                className="w-42 object-contain" 
              />
            </Link>
          </div>
          
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-sm font-bold">Last updated: 08/10/2025</p>
          </div>

          <div className="mb-8">
            <p className="text-gray-600">
              Dukasmart Limited ("we", "our", or "us") values your trust. This Privacy Policy explains
              how we collect, use, and protect your information when you use our services.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Payment information (for transactions and subscriptions)</li>
                <li>Usage analytics (how you interact with our app and services)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Provide and improve our services</li>
                <li>Process payments and maintain financial records</li>
                <li>Offer analytics and insights to improve user experience</li>
                <li>Communicate with you regarding updates, support, or service issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">3. Sharing of Information</h2>
              <p className="text-gray-600">
                We do not sell, rent, or share your personal data with third parties. All information stays
                within Dukasmart Limited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">4. Your Rights</h2>
              <p className="text-gray-600">
                You can request access, correction, or deletion of your personal data by
                contacting us at info@Dukasmart.com. We will do our best to honor your request,
                subject to regulatory obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">5. Data Retention</h2>
              <p className="text-gray-600">
                We retain your data only as long as necessary to comply with legal and regulatory
                requirements (such as financial record-keeping), after which it will be securely deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">6. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not intended for individuals under the age of 18. We do not knowingly
                collect personal data from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">7. Security</h2>
              <p className="text-gray-600">
                We take reasonable measures to protect your information through encryption, secure
                storage, and access controls. However, no method of transmission over the internet is
                100% secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">8. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions or concerns about this Privacy Policy, please contact us at: info@Dukasmart.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy