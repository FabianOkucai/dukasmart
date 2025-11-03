import React from 'react'
import ScrollAnimationWrapper from '../UI/ScrollAnimationWrapper'

/**
 * Features component - Server-rendered for SEO with progressive enhancement
 * All content is rendered on the server and visible to crawlers.
 * Animations are added via client-side wrapper for enhanced UX.
 */
const Features = () => {
  return (
    <ScrollAnimationWrapper>
      <div className="section-spacing" id="features">
      <div className="container-max">
        <div className="text-center-section fade-in">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Kila kitu at the palm of your hands</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Smart Inventory */}
          <div className="bg-purple-950 p-8 rounded-2xl relative overflow-hidden text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl slide-in-left">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Smart Inventory</h3>
              <p className="text-purple-100 leading-relaxed">Mambo ya stock haitawahi kustress. Track your stock levels in real-time, get low stock alerts, and never run out of your best-selling items.</p>
            </div>
          </div>

          {/* Sales Tracking */}
          <div className="bg-purple-950 p-8 rounded-2xl relative overflow-hidden text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl scale-in">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Sales Tracking</h3>
              <p className="text-purple-100 leading-relaxed">Angalia vile duka yako inaperform. Monitor daily, weekly, and monthly sales performance with detailed analytics and insights.</p>
            </div>
          </div>

          {/* Receipts */}
          <div className="bg-orange-500 p-8 rounded-2xl relative overflow-hidden text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl slide-in-right">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Receipts</h3>
              <p className="text-purple-100 leading-relaxed">Receipt books ni expensive sana, kuwa digital. Send receipts to your customers fast and maintain your official copies. Haha huwezi gongwa.</p>
            </div>
          </div>

          {/* Point of Sale - Large Card */}
          <div className="md:col-span-2 bg-purple-950 p-8 rounded-2xl relative overflow-hidden text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Point of Sale</h3>
              <p className="text-purple-100 leading-relaxed mb-6">Kuuza ni mbio mbio. Your checkout counter upgraded, quick selling, instant receipts. Serve customers wake haraka, avoid long lines.</p>
            </div>
          </div>

          {/* Customer Insights */}
          <div className="bg-purple-950 p-8 rounded-2xl relative overflow-hidden text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl scale-in">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Customer Insights</h3>
              <p className="text-purple-100 leading-relaxed">Jua wacustomer wako vizuri. Store customer contacts, view their purchase history, and send receipts with one click. No more "nipe number yako tena" every time.</p>
            </div>
          </div>

        </div>

        {/* And More Section */}
        <div className="mt-12 bg-purple-950 p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-semibold mb-4">And more</h3>
          <p className="text-purple-100 leading-relaxed">Hatujamalizia bado. Multiple users for your staff, backup your data automatically, access from any device, and get dedicated support when you need help. Everything you need, kila kitu iko.</p>
        </div>
      </div>
    </div>
    </ScrollAnimationWrapper>
  )
}

export default Features
