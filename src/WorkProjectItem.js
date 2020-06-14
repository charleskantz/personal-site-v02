import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import generateTechTags from './utils/generateTechTags.js';
import ProjectIcons from './ProjectIcons.js';

function WorkProjectItem({ title, company, description, tech, gh_link, demo_link }) {



  return (
  <Card className="projectContainer col-lg-5 offset-lg-2 col-md-9 col-sm-12">
    <Row>
      <Col>
      <h3>{title}</h3>
      <p className="projectTech">{generateTechTags(tech, title)}</p>
      <p>{description}</p>
      <ProjectIcons github={gh_link} demo={demo_link} />
      </Col>
    </Row>
  </Card>
  )
}

export default WorkProjectItem;