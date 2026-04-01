'use client'
import React, { useState, useEffect } from 'react'

const problems = [
  {
    number: '01',
    title: 'Manual bookkeeping drains your time',
    description: 'You spend hours every week on receipts and expense records. Then tax season comes and half the numbers don\'t add up.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    number: '02',
    title: 'Money comes in from everywhere',
    description: 'M-Pesa here, bank transfer there, cash in the drawer. Each one tracked differently. Reconciling it all takes days, and unpaid invoices get lost.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
  {
    number: '03',
    title: 'Tax compliance feels like guesswork',
    description: 'KRA rules keep changing. iTax is confusing. VAT math is easy to get wrong. Most people find out they made a mistake when the penalty notice shows up.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
    ),
  },
  {
    number: '04',
    title: 'Off-the-shelf software never quite fits',
    description: 'You download an app or buy a system, then spend weeks bending your operations to fit it. The features you actually need are missing or cost extra.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    ),
  },
]

const DURATION = 5000

const Problems = () => {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const tick = 30
    const step = (tick / DURATION) * 100
    let accumulated = 0
    const interval = setInterval(() => {
      accumulated += step
      if (accumulated >= 100) {
        accumulated = 0
        setActive((prev) => (prev + 1) % problems.length)
        setProgress(0)
      } else {
        setProgress(accumulated)
      }
    }, tick)
    return () => clearInterval(interval)
  }, [paused, active])

  const goTo = (index) => {
    setActive(index)
    setProgress(0)
  }

  const current = problems[active]

  return (
    <div className="py-16 md:py-24" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-3 block">The Problem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">Challenges that hold businesses back</h2>
        </div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Number tabs */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {problems.map((p, i) => (
              <button
                key={p.number}
                onClick={() => goTo(i)}
                className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-400 cursor-pointer ${
                  i === active
                    ? 'bg-purple-950 text-white shadow-lg'
                    : 'bg-white text-gray-400 hover:text-gray-600 border border-gray-200/70 hover:border-gray-300'
                }`}
              >
                <span className={`font-display text-xs ${i === active ? 'text-orange-400' : ''}`}>{p.number}</span>
                <span className="hidden sm:inline">{p.title.split(' ').slice(0, 2).join(' ')}</span>
              </button>
            ))}
          </div>

          {/* Card */}
          <div className="relative bg-white rounded-2xl border border-gray-200/70 shadow-sm overflow-hidden">
            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-100">
              <div
                className="h-full bg-orange-500 transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col md:flex-row items-start gap-8">
              {/* Icon + Number */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {current.icon}
                  </svg>
                </div>
                <span className="font-display text-4xl font-extrabold text-purple-950/10 select-none">{current.number}</span>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3
                  key={`title-${active}`}
                  className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight animate-fade-slide"
                >
                  {current.title}
                </h3>
                <p
                  key={`desc-${active}`}
                  className="text-gray-500 text-[15px] leading-relaxed max-w-xl animate-fade-slide delay-75"
                >
                  {current.description}
                </p>
              </div>
            </div>
          </div>

          {/* Dot nav (mobile redundancy) */}
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
            {problems.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === active ? 'bg-purple-950 w-6' : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Problems
