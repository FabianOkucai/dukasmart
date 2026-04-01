import React from 'react'
import ScrollAnimationWrapper from '../UI/ScrollAnimationWrapper'

const Features = () => {
  return (
    <ScrollAnimationWrapper>
      <div className="section-spacing" id="features" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container-max">
          <div className="text-center mb-14 fade-in">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-4 block">Our Services</span>
            <h2 className="section-title">What we build for you</h2>
            <p className="section-subtitle mt-3">Pick what you need. We set it up, connect it, and make it work together.</p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">

            {/* Payments — tall, spans 2 rows */}
            <div className="col-span-2 lg:col-span-2 lg:row-span-2 fade-in delay-100">
              <div className="relative bg-purple-950 rounded-2xl p-7 md:p-9 h-full overflow-hidden card-lift group">
                <div className="grain absolute inset-0" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-orange-500/[0.07] blur-3xl" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-400">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">Payments & Collections</h3>
                  <p className="text-purple-200/50 text-[14px] leading-relaxed mb-6 flex-1">M-Pesa, card, and bank payments all land in one place. The system reconciles them for you, so you always know what came in and from where.</p>
                  <div className="flex flex-wrap gap-2">
                    {['M-Pesa', 'Cards', 'Bank', 'Auto-reconcile'].map(tag => (
                      <span key={tag} className="text-[11px] font-medium text-purple-300/50 bg-white/[0.06] rounded-full px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Invoicing */}
            <div className="fade-in delay-200">
              <div className="relative bg-white rounded-2xl p-6 h-full border border-gray-200/70 card-lift group overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-400">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-[15px] font-bold text-gray-900 mb-1">Invoicing</h3>
                <p className="text-gray-400 text-[12.5px] leading-relaxed">Branded invoices, auto-reminders, balance tracking.</p>
              </div>
            </div>

            {/* Tax */}
            <div className="fade-in delay-300">
              <div className="relative bg-white rounded-2xl p-6 h-full border border-gray-200/70 card-lift group overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-400">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-[15px] font-bold text-gray-900 mb-1">Tax Compliance</h3>
                <p className="text-gray-400 text-[12.5px] leading-relaxed">KRA, iTax, TIMS — automated and accurate.</p>
              </div>
            </div>

            {/* Bookkeeping — wide */}
            <div className="col-span-2 fade-in delay-200">
              <div className="relative bg-orange-500 rounded-2xl p-6 md:p-7 h-full overflow-hidden card-lift group">
                <div className="grain absolute inset-0" />
                <div className="relative z-10 flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-400">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white mb-1">Bookkeeping & Accounting</h3>
                    <p className="text-orange-100/70 text-[13.5px] leading-relaxed">Expenses, profit and loss, cash flow, bank reconciliation. Your books stay clean without hiring an accountant.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory */}
            <div className="fade-in delay-100">
              <div className="relative bg-white rounded-2xl p-6 h-full border border-gray-200/70 card-lift group overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-purple-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-400">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-display text-[15px] font-bold text-gray-900 mb-1">Inventory</h3>
                <p className="text-gray-400 text-[12.5px] leading-relaxed">Stock tracking, reorder alerts, supplier mgmt.</p>
              </div>
            </div>

            {/* POS */}
            <div className="fade-in delay-200">
              <div className="relative bg-white rounded-2xl p-6 h-full border border-gray-200/70 card-lift group overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-purple-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-400">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </div>
                <h3 className="font-display text-[15px] font-bold text-gray-900 mb-1">Point of Sale</h3>
                <p className="text-gray-400 text-[12.5px] leading-relaxed">Quick checkout, digital receipts, all connected.</p>
              </div>
            </div>

            {/* Reports + Customers — wide, bottom row */}
            <div className="col-span-2 fade-in delay-300">
              <div className="relative bg-purple-950 rounded-2xl p-6 md:p-7 h-full overflow-hidden card-lift">
                <div className="grain absolute inset-0" />
                <div className="relative z-10 grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-[14px] font-bold text-white mb-0.5">Reports & Analytics</h3>
                      <p className="text-purple-200/40 text-[12px] leading-relaxed">See what's selling, what's not, and where the money goes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-[14px] font-bold text-white mb-0.5">Customer Management</h3>
                      <p className="text-purple-200/40 text-[12px] leading-relaxed">Know who your customers are and what they buy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="fade-in mt-10 text-center">
            <a href="#contact" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors duration-300 group">
              Need something custom? Let&apos;s talk
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  )
}

export default Features
