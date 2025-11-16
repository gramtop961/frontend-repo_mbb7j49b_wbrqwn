import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <div id="services"><Services /></div>
      <WhyUs />
      <div id="portfolio"><Portfolio /></div>
      <div id="testimonials"><Testimonials /></div>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
