import React from 'react'

const GradientBackground = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default GradientBackground
