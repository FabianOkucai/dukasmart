import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Hero, Features, Testimonials, Footer } from './components'
import About from './pages/About'
import Services from './pages/Services'
import Download from './pages/Download'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Support from './pages/Support'
import ComingSoon from './pages/ComingSoon'
import DataDeletion from './pages/DataDeletion'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <Testimonials />
              <Footer />
            </main>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/download" element={<Download />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/support" element={<Support />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
