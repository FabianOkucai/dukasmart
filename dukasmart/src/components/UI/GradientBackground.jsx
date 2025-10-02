import React from 'react'

const GradientBackground = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-600/30 blur-3xl" />
    <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-indigo-600/30 blur-3xl" />
    <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
  </div>
)

export default GradientBackground
