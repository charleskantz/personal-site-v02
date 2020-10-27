import React, { lazy, Suspense } from 'react';
import Home from './Home.js';
import About from './About.js';
// import Experience from './Experience.js';
// import Work from './Work.js';
// import Contact from './Contact.js';
import { workHistory, jobData } from './utils/workData.js';

const Experience = lazy(() => import('./Experience.js'));
const Work = lazy(() => import('./Work.js'));
const Contact = lazy(() => import('./Contact.js'));

const renderLoader = () => <h1>Loading...</h1>

function Container() {
  return (
    <div className="container">
      <Home />
      <About />
      <Suspense fallback={renderLoader()}>
        <Experience workHistory={workHistory} />
        <Work jobData={jobData} />
        <Contact />
      </Suspense>
    </div>
  )
}

export default Container;