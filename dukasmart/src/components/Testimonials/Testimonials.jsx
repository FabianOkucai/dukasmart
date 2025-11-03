import React from 'react'
import ScrollAnimationWrapper from '../UI/ScrollAnimationWrapper'
import TestimonialCarousel from './TestimonialCarousel'

/**
 * Testimonials component - Server-rendered for SEO with progressive enhancement
 * Content is fully rendered on server, carousel is client-side for interactivity
 */
const Testimonials = () => {
  const testimonials = [
    {
      name: "David M.",
      location: "Hardware Store, Thika",
      text: "I was losing money daily and couldn't figure out why. Turned out one of my staff was pocketing cash here and there. Dukasmart showed everything - every sale, every shilling. One day I compared the cash with the system, boom! Caught red-handed. Now everyone knows everything is tracked. The stealing stopped.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Grace W.",
      location: "Supermarket Owner, Nairobi",
      text: "My queue used to reach outside the shop, especially on weekends. Customers got frustrated, some left without buying. With Dukasmart, checkout time went from 5 minutes to under 1 minute. Now the line moves fast, people come more because they know they won't wait long. Sales have gone up!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Faith K.",
      location: "Cosmetics Shop, Mombasa",
      text: "Receipt books were costing me 3k every month. In a year, that's 36k just for receipt books! Now I send receipts digitally, customers get them instantly, and I save all that money. Best decision ever.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James O.",
      location: "Pharmacy, Kisumu",
      text: "I tried two systems before Dukasmart. One was so complicated that even after a week of training, my staff didn't get it. The other had too many features I don't use and was expensive. Dukasmart is simple - downloaded it, and after 30 minutes I was ready to sell. All my staff learned it within hours, even my 55-year-old employee.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lucy N.",
      location: "Electronics Shop, Eldoret",
      text: "Honestly, I expected a shop system to be boring and clunky. But Dukasmart? The design is really clean, everything is where you expect it. Even customers see me using it and say 'wow, very professional!' It makes my business look serious. Plus their support team responds fast - not like other companies where you call and no one answers.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <ScrollAnimationWrapper>
      <div className="py-20 bg-gray-50 container-max">
        <div className="text-center mb-16 fade-in">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">TESTIMONIALS</div>
          <h2 className="text-4xl font-light text-black mb-4">What Our Users Are Saying</h2>
        </div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </ScrollAnimationWrapper>
  )
}

export default Testimonials
