import React, { useEffect } from 'react'
import Section from '../UI/Section'

const Features = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="section-spacing" id="features">
      <div className="container-max">
        <div className="text-center-section">
          <h2 className="section-title">Run Your Shop Smarter with Dukasmart!</h2>
          <p className="section-subtitle">Your all-in-one app to track sales, manage stock, and grow profits.</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Smart Inventory Management */}
          <div className="bg-purple-950 p-8 rounded-2xl relative overflow-hidden text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Smart Inventory Management</h3>
              <p className="text-purple-100 leading-relaxed">Track your stock levels in real-time, get low stock alerts, and never run out of your best-selling items.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm">Real-time stock monitoring with automated alerts for low inventory levels</p>
            </div>
          </div>

          {/* Sales Tracking */}
          <div className="bg-purple-950 p-8 rounded-2xl relative overflow-hidden text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Sales Tracking</h3>
              <p className="text-purple-100 leading-relaxed">Monitor daily, weekly, and monthly sales performance with detailed analytics and growth insights.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm">Comprehensive sales analytics with performance trends and forecasting</p>
            </div>
          </div>

          {/* Customer Insights */}
          <div className="bg-purple-950 p-8 rounded-2xl relative overflow-hidden text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Customer Insights</h3>
              <p className="text-purple-100 leading-relaxed">Understand your customers better with purchase history and preferences to boost repeat sales.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm">Deep customer behavior analysis and personalized recommendations</p>
            </div>
          </div>

          {/* Expense Management - Large Card */}
          <div className="md:col-span-2 bg-purple-950 p-8 rounded-2xl relative overflow-hidden text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Expense Management</h3>
              <p className="text-purple-100 leading-relaxed mb-6">Keep track of all business expenses, categorize costs, and maintain healthy profit margins with smart budgeting tools.</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/20">
                <p className="text-purple-200 text-sm">Advanced financial tracking with automated categorization, real-time budget monitoring, and intelligent cost optimization recommendations to maximize your business profitability.</p>
              </div>
            </div>
          </div>

          {/* Reports & Analytics */}
          <div className="bg-purple-950 p-8 rounded-2xl relative overflow-hidden text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Reports & Analytics</h3>
              <p className="text-purple-100 leading-relaxed">Generate comprehensive business reports and get actionable insights to make informed decisions.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/20">
              <p className="text-purple-200 text-sm">AI-powered business intelligence with actionable growth recommendations</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Features
