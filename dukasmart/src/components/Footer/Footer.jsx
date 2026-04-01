'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Link from 'next/link'
import AppIcon from '../../assests/app_icons/transparent_png/dukasmart_logo_white.png'
import FacebookIcon from '../../assests/social_media_icon/1/linkedin.png'
import TwitterIcon from '../../assests/social_media_icon/1/instagram.png'
import LinkedInIcon from '../../assests/social_media_icon/1/mail.png'

const Footer = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right')
      .forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <footer id="contact" className="relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #1a0a2e 0%, #2e1065 50%, #1a0a2e 100%)' }}>
      <div className="grain absolute inset-0" />

      {/* Geometric accents */}
      <div className="absolute top-10 right-20 w-40 h-40 rounded-full border border-white/[0.03]" />
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border border-orange-500/10" />

      <div className="relative z-10 container-max py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-16 mb-12">
          {/* Brand */}
          <div className="slide-in-left">
            <Image src={AppIcon} alt="Dukasmart logo" className="w-32 object-contain mb-6" />
            <p className="text-purple-200/50 max-w-md leading-relaxed text-[15px] mb-8">
              We build business systems that fit how you actually work. Payments, invoicing, bookkeeping, tax, and the support to back it up.
            </p>

            <div className="flex gap-3">
              {[
                { icon: FacebookIcon, alt: 'LinkedIn' },
                { icon: TwitterIcon, alt: 'Instagram' },
                { icon: LinkedInIcon, alt: 'Email' },
              ].map(({ icon, alt }) => (
                <Link
                  key={alt}
                  href="/coming-soon"
                  className="w-10 h-10 bg-white/[0.06] border border-white/[0.08] rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <Image src={icon} alt={alt} className="w-4 h-4 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="slide-in-right">
            <h3 className="text-lg font-bold font-display text-white mb-8">Get in Touch</h3>
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  ),
                  text: 'info@Dukasmart.com',
                  href: 'mailto:info@Dukasmart.com',
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  ),
                  text: '+254 702 355935',
                  href: 'tel:+254702355935',
                },
                {
                  icon: (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </>
                  ),
                  text: 'Nairobi, Kenya',
                },
              ].map(({ icon, text, href }) => {
                const inner = (
                  <>
                    <div className="w-9 h-9 bg-white/[0.06] border border-white/[0.08] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-orange-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {icon}
                      </svg>
                    </div>
                    <span className="text-purple-200/50 text-sm">{text}</span>
                  </>
                )
                return href ? (
                  <a key={text} href={href} className="flex items-center gap-4 hover:opacity-80 transition-opacity duration-300">
                    {inner}
                  </a>
                ) : (
                  <div key={text} className="flex items-center gap-4">
                    {inner}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-purple-300/30 text-sm">&copy; 2026 Dukasmart. All rights reserved.</p>
            <div className="flex gap-8 text-sm">
              <Link href="/privacy" className="text-purple-300/30 hover:text-white/60 transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms" className="text-purple-300/30 hover:text-white/60 transition-colors duration-300">Terms of Service</Link>
              <Link href="/data-deletion" className="text-purple-300/30 hover:text-white/60 transition-colors duration-300">Data Deletion</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
