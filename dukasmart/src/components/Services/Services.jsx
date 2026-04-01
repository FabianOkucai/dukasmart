import React from 'react'
import ScrollAnimationWrapper from '../UI/ScrollAnimationWrapper'

const services = [
  {
    title: 'Payment Solutions',
    description: 'Integrated payment processing that works with how your customers prefer to pay.',
    details: 'M-Pesa integration \u00b7 Card payments \u00b7 Bank transfers \u00b7 Auto-reconciliation',
  },
  {
    title: 'Invoicing & Billing',
    description: 'Professional invoices and automated billing that keeps your cash flow healthy.',
    details: 'Custom invoices \u00b7 Payment reminders \u00b7 Balance tracking \u00b7 Branded templates',
  },
  {
    title: 'Tax & Compliance',
    description: 'Stay on the right side of KRA with automated tax calculations and filing support.',
    details: 'VAT calculations \u00b7 iTax integration \u00b7 TIMS compliance \u00b7 Tax-ready reports',
  },
  {
    title: 'Bookkeeping & Financial Management',
    description: 'Keep your finances organized without the overhead of a full accounting department.',
    details: 'Expense tracking \u00b7 P&L statements \u00b7 Cash flow reports \u00b7 Bank reconciliation',
    wide: true,
  },
  {
    title: 'Dedicated Support',
    description: 'A real team that knows your business and picks up the phone when you call.',
    details: 'Account manager \u00b7 Phone & WhatsApp \u00b7 Staff training \u00b7 Onboarding',
    accent: true,
  },
  {
    title: 'Inventory & Stock',
    description: 'Real-time visibility into what you have, what is selling, and what needs restocking.',
    details: 'Stock tracking \u00b7 Low stock alerts \u00b7 Supplier management \u00b7 Multi-location',
  },
  {
    title: 'Custom Solutions',
    description: 'Need something specific? We build around your workflows, not the other way around.',
    details: 'Workflow automation \u00b7 Custom reports \u00b7 API integrations \u00b7 Tailored dashboards',
  },
]

const Services = () => {
  return (
    <ScrollAnimationWrapper>
      <div id="services" className="section-spacing" style={{ backgroundColor: 'var(--warm-gray)' }}>
        <div className="container-max">
          <div className="text-center mb-16 fade-in">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-4 block">How We Work</span>
            <h2 className="section-title">Every business is different.<br className="hidden md:block" /> We build accordingly.</h2>
            <p className="section-subtitle mt-4">We take the time to understand yours and build solutions that fit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`fade-in delay-${Math.min((index + 1) * 100, 500)} ${service.wide ? 'md:col-span-2' : ''}`}
              >
                <div className={`relative rounded-2xl p-8 lg:p-10 card-lift overflow-hidden h-full ${
                  service.accent
                    ? 'bg-orange-500 text-white'
                    : 'bg-purple-950 text-white'
                }`}>
                  <div className="grain absolute inset-0" />

                  <div className="relative z-10">
                    <h3 className="text-lg lg:text-xl font-bold font-display mb-3">{service.title}</h3>
                    <p className={`text-[15px] leading-relaxed mb-6 ${
                      service.accent ? 'text-orange-100/80' : 'text-purple-100/60'
                    }`}>
                      {service.description}
                    </p>
                    <div className={`rounded-xl p-4 text-sm ${
                      service.accent ? 'bg-white/10' : 'bg-white/[0.06] border border-white/[0.06]'
                    }`}>
                      <p className={service.accent ? 'text-orange-100/70' : 'text-purple-200/40'}>
                        {service.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  )
}

export default Services
