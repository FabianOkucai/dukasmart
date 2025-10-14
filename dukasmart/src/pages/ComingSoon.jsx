import React from 'react'
import { Link } from 'react-router-dom'
import AppIcon from '../assests/app icons/Transperent Png/dukasmart_logo.png'

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="mb-8">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src={AppIcon} 
                alt="Dukasmart logo" 
                className="w-40 object-contain" 
              />
            </Link>
          </div>
          
          <div className="text-center py-16">
            <h1 className="text-5xl font-bold text-black mb-6">Coming Soon</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're working on our social media presence. Stay tuned for updates!
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon