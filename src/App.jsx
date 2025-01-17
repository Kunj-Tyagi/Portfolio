import './App.css'
import React from 'react'

import Navbar from './landing_Page/Navbar'
import Hero from './landing_Page/Hero'
import Projects from './landing_Page/Projects'
import Projects1 from './landing_Page/Projects1'
import Footer from './landing_Page/Footer'
import Achievement from './landing_Page/Achievement'
import Aboutme from './landing_Page/Aboutme'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Projects />
      <Projects1 />
      <Achievement />
      <Footer />
    </>
  )
}

export default App
