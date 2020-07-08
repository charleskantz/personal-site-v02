import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import generateTechTags from './utils/generateTechTags.js';
import ProjectIcons from './ProjectIcons.js';

function WorkFeaturedItem({ title, company, img_link, img_align, description, tech, gh_link, demo_link }) {


  return (
    <Card
      className="projectContainer col-12"
      data-aos="fade-up"
    >
      <Row>
        <Col md={12} lg={5}>
          <a rel="noopener noreferrer" href={demo_link} target="_blank" ><div
            className="projectImage"
            style={{ backgroundImage: `url(${img_link})`, backgroundPosition: img_align }}
          ></div></a>
        </Col>
        <Col md={12} lg={7} className="projectDetails">
          <div>
            <div className="projectFeatured">Featured Project</div>
            <h2>{title}</h2>
            <p className="projectTech">{generateTechTags(tech, title)}</p>
            <p>{description}</p>
            <ProjectIcons github={gh_link} demo={demo_link} />
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default WorkFeaturedItem;

// {
//   featured: true,
//   title: "Neutral Blog",
//   company: "Rithm School",
//   tech: ["Javascript","React", "Redux", "Express"],
//   img_link: "",
//   gh_link: "",
//   demo_link: "",
//   description: "A Medium-like blog where you can create posts, delete posts, leave comments, and delete comments. Uses Redux for state "
// },