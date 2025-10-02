import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { Home, About, Features, Contact } from './pages'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
