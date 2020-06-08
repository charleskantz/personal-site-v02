import React from 'react';
import Navbar from './Navbar.js'
import Home from './Home.js'
import About from './About.js'
import Experience from './Experience.js'
import Work from './Work.js'
import Contact from './Contact.js'

function Container() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Experience />
      <Contact />
    </div>
  )
}

export default Container;