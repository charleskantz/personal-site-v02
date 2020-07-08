import React from 'react';
import selfie from './images/ckantz_portrait_sm.jpg';
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

function About() {
  return (
    <Container id="about" className="sectionContainer">
      <Row>
        <Col
          xs={{ span: 8, offset: 2 }}
          md={{ span: 5, offset: 0}}
          lg={{ span: 4, offset: 1 }}
          className="mb-4"
        >
          <Image data-aos="fade-right" src={selfie} fluid rounded className="aboutImage"/>
        </Col>

        <Col md={7} lg={6} >
          <h2 data-aos="fade-down">About Charles</h2>
          <div data-aos="fade-left" className="aboutRule"></div>
          <div data-aos="fade-up">
            <p>
              As a former designer of 12 years I have occasionally dipped
              my toes into coding for my projects. It wasn't until designing
              and implementing a fully working VR experience that I realized
              how much I enjoyed software development, even more than design.
              I took that as a sign and left my job to pursue this new love.
              I enrolled in the Rithm School where I honed my developer skills
              and completed my transition to web development!
            </p>
            <p>
              Outside of my career, I have spent most of my life in the Bay
              Area, aside from a few years in the suburbs of Portland. Besides
              immersing myself in development and design, you can find me
              enjoying sci-fi, photography, video games, baking bread, and
              the company of friends.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About;