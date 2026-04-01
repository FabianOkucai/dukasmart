'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'

const stats = [
  { end: 500, suffix: '+', label: 'Businesses served', prefix: '' },
  { end: 50, suffix: 'M+', label: 'Transactions processed', prefix: 'KES ' },
  { end: 99.9, suffix: '%', label: 'System uptime', prefix: '', decimals: 1, highlight: true },
  { end: 24, suffix: '/7', label: 'Dedicated support', prefix: '' },
]

function useCountUp(end, duration, started, decimals = 0) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!started) return
    let raf
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(parseFloat((eased * end).toFixed(decimals)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, started, decimals])

  return value
}

function StatItem({ stat, started, index }) {
  const value = useCountUp(stat.end, 1800 + index * 200, started, stat.decimals || 0)

  return (
    <div className="relative flex-1 flex flex-col items-center text-center px-4 md:px-8 py-8 group">
      {/* Animated ring behind highlighted stat */}
      {stat.highlight && (
        <div className="absolute inset-4 rounded-2xl bg-orange-500/[0.06] border border-orange-500/10 transition-all duration-500 group-hover:bg-orange-500/[0.1]" />
      )}

      <div className="relative z-10">
        <div className={`font-display font-extrabold leading-none mb-2 transition-colors duration-300 ${
          stat.highlight ? 'text-orange-500' : 'text-gray-900 group-hover:text-purple-950'
        }`}>
          <span className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
            {stat.prefix}{stat.decimals ? value.toFixed(stat.decimals) : Math.round(value)}
          </span>
          <span className={`text-2xl md:text-3xl lg:text-4xl ${stat.highlight ? 'text-orange-400' : 'text-gray-400'}`}>
            {stat.suffix}
          </span>
        </div>
        <div className="text-gray-400 text-[13px] font-medium tracking-wide">{stat.label}</div>
      </div>
    </div>
  )
}

const Stats = () => {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  const onIntersect = useCallback((entries) => {
    if (entries[0].isIntersecting) setStarted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [onIntersect])

  return (
    <div id="stats" ref={ref} className="py-8 md:py-12" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl bg-white border border-gray-200/70 shadow-sm overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat, index) => (
              <StatItem key={stat.label} stat={stat} started={started} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
