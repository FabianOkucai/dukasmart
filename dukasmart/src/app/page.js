import dynamic from 'next/dynamic'
import Hero from '../components/Hero/Hero'

const Problems = dynamic(() => import('../components/Problems/Problems'), {
  loading: () => <div className="min-h-[400px]" />,
})

const WhyUs = dynamic(() => import('../components/WhyUs/WhyUs'), {
  loading: () => <div className="min-h-[400px]" />,
})

const Features = dynamic(() => import('../components/Features/Features'), {
  loading: () => <div className="min-h-[400px]" />,
})

const About = dynamic(() => import('../components/About/About'), {
  loading: () => <div className="min-h-[300px]" />,
})

const Testimonials = dynamic(() => import('../components/Testimonials/Testimonials'), {
  loading: () => <div className="min-h-[300px]" />,
})

const FAQ = dynamic(() => import('../components/FAQ/FAQ'), {
  loading: () => <div className="min-h-[300px]" />,
})

const Footer = dynamic(() => import('../components/Footer/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata = {
  title: 'Dukasmart - Customized Business Solutions',
  description: 'Dukasmart builds custom business systems for Kenyan businesses. Payments, invoicing, bookkeeping, tax filing, and real support.',
  openGraph: {
    title: 'Dukasmart - Customized Business Solutions',
    description: 'Custom business systems for Kenyan businesses. Payments, invoicing, bookkeeping, tax, and support that actually picks up the phone.',
  }
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Problems />
      <WhyUs />
      <Features />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
