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
      name: "Newton Brian",
      location: "Bungoma, Kenya",
      text: "Dukasmart has made managing my shop much easier, especially with inventory tracking. However, I wish the app loaded a bit faster on my older phone.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jude Ocomil",
      location: "Mumias, Kenya",
      text: "The sales analytics are really helpful and I like the simple interface. Sometimes the notifications are delayed, but overall it's a solid tool for my business.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Frankline Karanja",
      location: "Kijabe, Kiambu, Kenya",
      text: "Dukasmart is a game-changer! The app is easy to use and helps me keep track of my sales and stock with zero hassle. Highly recommended for any business owner.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Omae",
      location: "Nairobi, Kenya",
      text: "Dukasmart transformed my business operations completely. The inventory management and sales tracking work seamlessly together for my electronics store.",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ouma Spencer",
      location: "Nairobi, Kenya",
      text: "The mobile app lets me manage my restaurant from anywhere. Real-time updates and offline functionality are game-changers for my business.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mama Alarm",
      location: "Siwaka, Nairobi, Kenya",
      text: "Customer analytics helped me understand my boutique customers better. Sales increased by 45% in just three months using Dukasmart insights.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <ScrollAnimationWrapper>
      <div className="py-20 bg-gray-50 container-max">
        <div className="text-center mb-16 fade-in">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">TESTIMONIALS</div>
          <h2 className="text-4xl font-light text-black mb-4">What Our Client Say!</h2>
        </div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </ScrollAnimationWrapper>
  )
}

export default Testimonials
