import React from 'react'
import ScrollAnimationWrapper from '../UI/ScrollAnimationWrapper'
import TestimonialCarousel from './TestimonialCarousel'

const Testimonials = () => {
  const testimonials = [
    {
      name: "David M.",
      location: "Hardware Distributor, Thika",
      text: "We used to do all our invoicing by hand. I'd forget who owed what, and I was spending half of Friday just chasing money. Now invoices go out on their own, reminders too. We actually get paid on time.",
    },
    {
      name: "Grace W.",
      location: "Retail Chain Owner, Nairobi",
      text: "M-Pesa, cards, bank transfers - we were tracking all of it separately. My accountant spent two days every month just on reconciliation. Dukasmart put it all in one system and that job basically disappeared.",
    },
    {
      name: "Faith K.",
      location: "Cosmetics Wholesale, Mombasa",
      text: "I used to dread tax season. Weeks of digging through receipts, trying to make everything match. Last time I filed with KRA it took me less than an hour because the reports were already there.",
    },
    {
      name: "James O.",
      location: "Pharmacy Group, Kisumu",
      text: "They came to our pharmacy, watched how we work, asked a lot of questions. Then they built a system around that. Inventory, purchase orders, the lot. It actually fits our process instead of forcing us into theirs.",
    },
    {
      name: "Lucy N.",
      location: "Electronics Retailer, Eldoret",
      text: "Honestly I didn't want to leave Excel. But they moved all our data over, trained my staff in one afternoon, and whenever something comes up I just call them. Our reports actually make sense now.",
    }
  ]

  return (
    <ScrollAnimationWrapper>
      <div id="testimonials" className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(160deg, #1a0a2e 0%, #2e1065 45%, #1a0a2e 100%)' }}>
        <div className="grain absolute inset-0" />

        {/* Geometric accents */}
        <div className="absolute top-16 left-[10%] w-48 h-48 rounded-full border border-white/[0.03]" />
        <div className="absolute bottom-16 right-[10%] w-32 h-32 rounded-full border border-orange-500/10" />

        <div className="relative z-10 container-max">
          <div className="text-center mb-16 fade-in">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-display">What Our Clients Say</h2>
            <p className="text-purple-200/40 mt-4 text-base max-w-lg mx-auto">Real businesses, real results. Here's how they describe working with us.</p>
          </div>

          <TestimonialCarousel testimonials={testimonials} dark />
        </div>
      </div>
    </ScrollAnimationWrapper>
  )
}

export default Testimonials
