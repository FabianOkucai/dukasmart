import React from 'react'
import Section from '../UI/Section'
import AppIcon from '../../assests/app icons/Transperent Png/app icons-01.png'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 shadow-lg bg-purple-950">
      <Section className="relative z-10">
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center gap-3">
            <img 
              src={AppIcon} 
              alt="DukaSmart logo" 
              className="h-16 w-16 object-contain" 
            />
            <span className="text-xl font-light text-white">DukaSmart</span>
          </div>
        </div>
      </Section>
    </header>
  )
}

export default Header
