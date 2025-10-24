import React from 'react'

const FeatureCard = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default FeatureCard
