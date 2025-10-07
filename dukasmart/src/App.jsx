import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Hero, Features, Testimonials, Footer } from './components'
import About from './pages/About'
import Services from './pages/Services'
import Download from './pages/Download'

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
        </Routes>
      </div>
    </Router>
  )
}

export default App
