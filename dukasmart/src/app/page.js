import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Features from '../components/Features/Features'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'

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
