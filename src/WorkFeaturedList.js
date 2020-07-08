import React from 'react';
import WorkFeaturedItem from './WorkFeaturedItem.js';

function WorkFeaturedList({ jobData }) {

  const generateFeatured = jobData => {
    return jobData.map(project => (
        <WorkFeaturedItem
          key={project.title}
          title={project.title}
          company={project.company}
          img_link={project.img_link}
          img_align={project.img_align}
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

export default WorkFeaturedList;