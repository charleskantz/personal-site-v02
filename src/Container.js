import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Experience from './Experience.js';
import Work from './Work.js';
import Contact from './Contact.js';
import { workHistory, jobData } from './utils/workData.js';

function Container() {
  return (
    <div className="container">
      <Home />
      <About />
      <Experience workHistory={workHistory} />
      <Work jobData={jobData} />
      <Contact />
    </div>
  )
}

export default Container;