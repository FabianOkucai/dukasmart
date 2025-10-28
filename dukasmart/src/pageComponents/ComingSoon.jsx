import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AppIcon from '../assests/app_icons/transparent_png/dukasmart_logo.png'

const ComingSoon = () => {
  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100">
          <div className="mb-8">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image 
                src={AppIcon} 
                alt="Dukasmart logo" 
                className="w-32 md:w-40 lg:w-42 object-contain" 
              />
            </Link>
          </div>
          
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Coming Soon</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're working on our social media presence and exciting new features. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
