import React from 'react';
import WorkFeaturedList from './WorkFeaturedList.js';
import WorkProjectList from './WorkProjectList.js';

function Work({ jobData }) {

  console.log("~~jobData~~", jobData);


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
        <h3 className="text-center">Other notable projects</h3>
        <WorkProjectList jobData={normalList} />
      </>
    )
  }

  return (
    <div className="sectionContainer" id="work">
      <div>
        <h1 className="text-center">Work!</h1>
        {generateLists(jobData)}
      </div>
    </div>
  )
}

export default Work;