import React from 'react'

const Section = ({ children, className = "" }) => (
  <section className={`relative mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>
    {children}
  </section>
)

export default Section
