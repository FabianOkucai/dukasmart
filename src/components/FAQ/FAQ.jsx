'use client'
import React, { useState } from 'react'

const faqs = [
  {
    question: 'What kind of businesses do you work with?',
    answer: 'Shops, pharmacies, retail chains, distributors, wholesalers. If you deal with payments, stock, or financial records, we can help. Size doesn\'t matter much - we\'ve worked with one-person shops and multi-branch operations.',
  },
  {
    question: 'How customized are your solutions?',
    answer: 'Completely. We don\'t have a standard package you sign up for. We come to you, look at how things run, and build from there. Two clients in the same industry will usually end up with different setups because their operations are different.',
  },
  {
    question: 'Do you integrate with M-Pesa and KRA systems?',
    answer: 'Yes, both. M-Pesa payments come straight into the system and reconcile automatically. For tax, we connect to iTax and TIMS so VAT and filing are handled. Bank and card integrations too.',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Yes. It\'s small, runs on most phones, and works without internet. You can check payments, pull up invoices, and look at reports from wherever you are. It syncs when you\'re back online.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'You get an account manager who knows your setup. Call or WhatsApp and a person picks up. We also train your staff when you get started, and again if you add new people later.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Simple setups take a few days. If you need more custom work, usually 2-4 weeks. We move your existing data over, train your team, and test everything before you start using it.',
  },
  {
    question: 'Is my business data secure?',
    answer: 'Yes. Everything is encrypted, backed up daily, and stored on secure cloud servers. If something goes wrong, your data is recoverable.',
  },
]

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`border-b border-gray-200/70 transition-colors duration-300 ${isOpen ? 'bg-white' : ''}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 px-6 md:px-8 text-left cursor-pointer group"
      >
        <span className={`font-display text-[15px] md:text-base font-semibold pr-8 transition-colors duration-300 ${
          isOpen ? 'text-purple-950' : 'text-gray-700 group-hover:text-gray-900'
        }`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen ? 'bg-orange-500 rotate-45' : 'bg-gray-100 group-hover:bg-gray-200'
        }`}>
          <svg className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 md:px-8 pb-6">
          <p className="text-gray-500 text-[14px] leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div id="faq" className="section-spacing" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-4 block">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl border border-gray-200/80 overflow-hidden bg-gray-50/50">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
