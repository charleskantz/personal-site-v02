import React from 'react';
import Navigation from './Navigation.js'
import Home from './Home.js'
import About from './About.js'
import Experience from './Experience.js'
import Work from './Work.js'
import Contact from './Contact.js'

function Container() {
  return (
    <div className="container">
      <Navigation />
      <Home />
      <About />
      <Work />
      <Experience />
      <Contact />
    </div>
  )
}

export default Container;