import React from 'react';
import WorkFeaturedList from './WorkFeaturedList.js';
import WorkProjectList from './WorkProjectList.js';
import CtaBanner from './CtaBanner.js';

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
        <h3 className=" my-5 text-center">Other Noteworthy Work</h3>
          <WorkProjectList jobData={normalList} />
          <CtaBanner
            cta="check out my design portfolio:"
            link={[ "design.charleskantz.com", "https://design.charleskantz.com" ]}
            icon={[ 'fad', 'pencil-ruler' ]}
          />
      </>
    )
  }

  return (
    <div className="sectionContainer" id="work">
      <div>
        <h1 className="text-center">Featured Work</h1>
        <div className="aboutRule mx-auto mt-3 mb-5"></div>
        {generateLists(jobData)}
      </div>
    </div>
  )
}

export default Work;