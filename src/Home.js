import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container className="sectionContainer" id="home">
      <Row>
        <Col xs={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }}>
          <h5 className="homeHeroHello">Hello my name is</h5>
          <div data-aos="fade" className="homeHeroName">Charles Kantz</div>
          <div className="aboutRule"></div>
          <h2 data-aos-delay="1000" data-aos="fade" className="homeHeroTagline">I solve visual problems.</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;