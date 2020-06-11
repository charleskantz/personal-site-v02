import React from 'react';
import {
  Container,
  Col,
  Row,
  Tab,
  Nav
} from 'react-bootstrap';
import workHistory from './utils/workData.js';



function Work() {

  const generateTabs = workHistory => {
    return workHistory.map(job => {
      return (
        <Nav.Item key={`tab-${job.label}`}>
          <Nav.Link eventKey={job.label}>{job.company}</Nav.Link>
        </Nav.Item>
      )
    });
  }

  const generatePanes = workHistory => {
    return workHistory.map(job => {
      return (
        <Tab.Pane key={job.label} eventKey={job.label}>
          <h5>{job.title} at {job.company}</h5>
          <p>{job.start_date} to {job.end_date}</p>
          <ul>
            {job.bullets.map(bullet => <li>{bullet}</li>)}
          </ul>
        </Tab.Pane>
      )
    });
  }

  return (
    <Container className="sectionContainer" id="work">
      <div>
        <h3 className="text-center mb-4" >Work Experience</h3>
        <div className="workContainer col-10 offset-1">
          <Tab.Container id="left-tabs-example" defaultActiveKey="livestack">
            <Row>
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
      </div>
    </Container>
  )
}

export default Work;