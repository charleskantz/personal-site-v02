import React from 'react';
import WorkFeaturedList from './WorkFeaturedList.js';
import WorkProjectList from './WorkProjectList.js';
import DesignCtaBanner from './DesignCtaBanner.js';
import Fade from 'react-reveal/Fade';

function Work({ jobData }) {

  const generateLists = jobData => {
    let featuredList = [];
    let normalList = [];

    for (let project of jobData) {
      if (project.featured) { featuredList.push(project) }
      else { normalList.push(project) }
    }
    return (
      <>
        <WorkFeaturedList jobData={featuredList} />
        <h3 className=" my-5 text-center">Other notable projects</h3>
        <Fade bottom>
          <DesignCtaBanner />
        </Fade>
        <Fade bottom>
          <WorkProjectList jobData={normalList} />
        </Fade>
      </>
    )
  }

  return (
    <div className="sectionContainer" id="work">
      <div>
        <h1 className="text-center">Some Projects of Mine</h1>
        <div className="aboutRule mx-auto mt-3 mb-5"></div>
        {generateLists(jobData)}
      </div>
    </div>
  )
}

export default Work;