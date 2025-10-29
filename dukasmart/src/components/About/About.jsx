import React from 'react'
import ScrollAnimationWrapper from '../UI/ScrollAnimationWrapper'

/**
 * Stats component - Server-rendered for SEO with progressive enhancement
 * All content is rendered on the server and visible to crawlers.
 */
const Stats = () => {
  return (
    <ScrollAnimationWrapper>
      <div id="stats" className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container-max">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div className="bg-purple-950 rounded-2xl p-4 md:p-6 lg:p-8 text-center text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-purple-200 mb-2 md:mb-3">16K+</div>
            <div className="text-xs md:text-sm text-purple-100 font-medium">Active Users</div>
          </div>
          <div className="bg-purple-950 rounded-2xl p-4 md:p-6 lg:p-8 text-center text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-purple-200 mb-2 md:mb-3">5+</div>
            <div className="text-xs md:text-sm text-purple-100 font-medium">Countries</div>
          </div>
          <div className="bg-orange-500 rounded-2xl p-4 md:p-6 lg:p-8 text-center text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-purple-200 mb-2 md:mb-3">99.9%</div>
            <div className="text-xs md:text-sm text-purple-100 font-medium">Uptime</div>
          </div>
          <div className="bg-purple-950 rounded-2xl p-4 md:p-6 lg:p-8 text-center text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-purple-200 mb-2 md:mb-3">40%</div>
            <div className="text-xs md:text-sm text-purple-100 font-medium">Growth Rate</div>
          </div>
        </div>
      </div>
    </div>
    </ScrollAnimationWrapper>
  )
}

export default Stats
