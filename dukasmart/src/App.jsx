import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Hero, About, Services, Features, Testimonials, Footer } from './components'
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
              <About />
              <Services />
              <Features />
              <Testimonials />
              <Footer />
            </main>
          } />
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
