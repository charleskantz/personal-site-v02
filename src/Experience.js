import React from 'react';
import {
  Container,
  Col,
  Row,
  Tab,
  Nav
} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

function Experience({ workHistory }) {

  const generateTabs = workHistory => {
    let engRoles = [];
    let designRoles = [];

    // split jobs based on role
    for (let job of workHistory) {
      if (job.role === "engineering") { engRoles.push(job) }
      else { designRoles.push(job) };
    }

    return (
      <>
        <p className="workRole">Engineering</p>
        {engRoles.map(job => (
          <Nav.Item key={`tab-${job.label}`}>
            <Nav.Link eventKey={job.label}>{job.company}</Nav.Link>
          </Nav.Item>
        ))}
        <p className="workRole">Design</p>
        {designRoles.map(job => (
          <Nav.Item key={`tab-${job.label}`}>
            <Nav.Link eventKey={job.label}>{job.company}</Nav.Link>
          </Nav.Item>
        ))}
      </>
    )
  }

  const generatePanes = workHistory => {
    return workHistory.map(job => {
      return (
        <Tab.Pane key={job.label} eventKey={job.label}>
          <h3><span className="workPosition">{job.title}</span> at {job.company}</h3>
          <p>{job.start_date} to {job.end_date}</p>
          <ul>
            {job.bullets.map((bullet, idx) => <li key={idx} >{bullet}</li>)}
          </ul>
        </Tab.Pane>
      )
    });
  }

  return (
    <Container className="sectionContainer" id="experience">
      <div>
        <h1 className="text-center mb-4" >Work Experience</h1>
        <div className="aboutRule mx-auto mt-3 mb-5"></div>
        <Fade bottom>
          <div className="workContainer col-md-10 offset-md-1 col-sm-12">
            <Tab.Container id="left-tabs-example" defaultActiveKey="livestack">
              <Row className="mx-2">
                <Col sm={12} md={12} lg={{span: 3, offset: 0}} className="mb-4" >
                  <Nav variant="pills" className="flex-column">
                    {generateTabs(workHistory)}
                  </Nav>
                </Col>
                <Col sm={12} md={12} lg={{ span: 9, offset: 0 }}>
                  <Tab.Content>
                    {generatePanes(workHistory)}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Fade>
        <Fade bottom>
          <Row className="col-10 offset-1 workSkills justify-content-center">
            <Col md={6} lg={3}>
              <h2>Skills</h2>
            </Col>
            <Col md={6} lg={3} className="workSkillsTech">
              <p><strong>Technical</strong></p>
              <p>
                Javascript (ES6), Python, HTML, CSS/Sass, React, Node, Express, Flask, PostgreSQL, jQuery, Unity
              </p>
            </Col>
            <Col md={6} lg={3} className="workSkillsDesign">
            <p><strong>Design</strong></p>
              <p>
                Branding, art direction, user experience, web design, print design, UI design
              </p>
            </Col>
            <Col md={6} lg={3} className="workSkillsTools">
            <p><strong>Tools</strong></p>
              <p>
                Photoshop, Illustrator, InDesign, Sketch, After Effects, Lightroom, Premiere, Invision, Figma
              </p>
            </Col>
          </Row>
        </Fade>
      </div>

    </Container>
  )
}

export default Experience;