import React from 'react';
import WorkProjectItem from './WorkProjectItem.js';

function WorkProjectList({ jobData }) {

  const generateFeatured = jobData => {
    return jobData.map(project => (
      <WorkProjectItem
        key={project.title}
        title={project.title}
        company={project.company}
        img_link={project.img_link}
        description={project.description}
        tech={project.tech}
        gh_link={project.gh_link}
        demo_link={project.demo_link}
      />
    ));
  }

  return (
    <div className="projectListContainer">
      {generateFeatured(jobData)}
    </div>
  )
}

export default WorkProjectList;