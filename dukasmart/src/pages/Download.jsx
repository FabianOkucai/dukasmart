import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/UI/Section'
import AppIcon from '../assests/app_icons/transparent_png/dukasmart_logo.png'

const Download = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="p-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={AppIcon} 
              alt="Dukasmart logo" 
              className=" w-42 object-contain" 
            />
          </Link>
          
          <Link 
            to="/" 
            className="text-gray-800 hover:text-purple-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      <Section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-gray-800 mb-6">
            Download Dukasmart
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get the most powerful business management app and start growing your business today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Download Options */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Google Play Store */}
            <div className="bg-purple-950 rounded-3xl p-8 text-center hover:bg-purple-900 transition-all duration-300 hover:scale-105 text-white">
              <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-4">Android App</h3>
              <p className="text-purple-200 mb-6">Available on Google Play Store</p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.dukasmart.apps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-purple-950 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Download for Android
              </a>
            </div>

            {/* App Store */}
            <div className="bg-purple-950 rounded-3xl p-8 text-center hover:bg-purple-900 transition-all duration-300 hover:scale-105 text-white">
              <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-4">iOS App</h3>
              <p className="text-purple-200 mb-6">Coming soon to App Store</p>
              <button 
                disabled
                className="inline-flex items-center gap-3 bg-gray-600 text-gray-300 px-8 py-4 rounded-xl font-medium cursor-not-allowed"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Download
