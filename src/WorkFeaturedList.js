import React from 'react';
import WorkFeaturedItem from './WorkFeaturedItem.js';
import Fade from 'react-reveal/Fade';

function WorkFeaturedList({ jobData }) {

  const generateFeatured = jobData => {
    return jobData.map(project => (
      <Fade bottom>
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
      </Fade>

    ));
  }

  return (
    <div className="projectListContainer">
      {generateFeatured(jobData)}
    </div>
  )
}

export default WorkFeaturedList;