'use client'

import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/Footer/Footer'
import AppIcon from '../../assests/app_icons/transparent_png/dukasmart_logo.png'

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-white">
      <main className="flex-1 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-950">
            <div className="mb-8">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image
                  src={AppIcon}
                  alt="Dukasmart logo"
                  className="w-32 md:w-40 lg:w-42 object-contain"
                />
              </Link>
            </div>

            <div className="mb-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Request Data Deletion</h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                We respect your privacy. Request deletion of your personal data and we'll permanently remove it from our systems within 30 days.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-10 border border-purple-200">
              <form
                className="space-y-6"
                method="POST"
                action="https://formspree.io/f/mwkgyqga"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      className="w-full border-2 border-purple-950 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white transition-all duration-200 rounded-xl"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border-2 border-purple-950 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white transition-all duration-200 rounded-xl"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Account Identifier</label>
                  <input
                    type="text"
                    name="accountId"
                    className="w-full border-2 border-purple-950 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white transition-all duration-200 rounded-xl"
                    placeholder="User ID, phone number, or organization name (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Additional Details</label>
                  <textarea
                    name="details"
                    rows="4"
                    className="w-full border-2 border-purple-950 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white transition-all duration-200 resize-none rounded-xl"
                    placeholder="Any additional information to help us locate your data (optional)"
                  />
                </div>

                <div className="bg-white rounded-xl p-4 border border-purple-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold">Privacy Notice:</span> By submitting this request, you confirm that the information provided is accurate and that you are authorized to make this request for the associated account. We will verify your identity before processing.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-950 hover:bg-purple-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Submit Deletion Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
