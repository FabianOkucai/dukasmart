import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Features from '../components/Features/Features'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  )
}
