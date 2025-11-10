import dynamic from 'next/dynamic'
import Hero from '../components/Hero/Hero'

// Lazy load components that are below the fold for better initial load performance
const Features = dynamic(() => import('../components/Features/Features'), {
  loading: () => <div className="min-h-[400px]" />,
})

const About = dynamic(() => import('../components/About/About'), {
  loading: () => <div className="min-h-[400px]" />,
})

const Testimonials = dynamic(() => import('../components/Testimonials/Testimonials'), {
  loading: () => <div className="min-h-[300px]" />,
})

const Footer = dynamic(() => import('../components/Footer/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata = {
  title: 'Dukasmart - A home for your business',
  description: 'Dukasmart - A home for your business. Track inventory, manage sales, and grow your business with powerful analytics and insights.',
  openGraph: {
    title: 'Dukasmart - A home for your business',
    description: 'A home for your business. Track inventory, manage sales, and grow with powerful analytics.',
  }
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Footer />
    </main>
  )
}
