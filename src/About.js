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
          <Image data-aos="fade-up" src={selfie} fluid rounded className="aboutImage"/>
        </Col>

        <Col md={7} lg={6} >
          <h2 data-aos="fade-up">About Charles</h2>
          <div data-aos="fade" className="aboutRule"></div>
          <div data-aos="fade-up">
            <p>
              My name is Charles Kantz, and I am a recent graduate of the Rithm School,
              where I learned full-stack engineering and led large scale coding projects
              on the front and back end. For the last 7 years, I was a visual designer
              and art director for Silicon Valley companies like Intuitive Surgical and Nuro,
              where I led branding and user experience efforts.
            </p>
            <p>
              As a designer, I loved to solve visual problems. Over the years, I found myself
              wanting more than what design was providing. I realized what I loved about my
              work was solving the more technical challenges, as well as building and implementing designs.
              I admired developers who took my specs and brought them to life, and I realized that I
              wanted to explore doing just that.
            </p>
            <p>
              I got my chance to try development when employed at Nuro by creating a virtual reality
              prototype for an unreleased product. I learned C# on my own, developed the experience
              in Unity over three months, and loved every minute of the process. When it was complete,
              I felt proud and satisfied with my work, which solidified my theory that software
              engineering was the best path for me. I took this as a sign and attended Rithm School
              to pursue this new venture.
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