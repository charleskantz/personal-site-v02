import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container className="sectionContainer" id="home">
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }}>
          <h5 className="homeHeroHello">Hello my name is</h5>
          <div className="homeHeroName">Charles Kantz</div>
          <div className="aboutRule"></div>
          <h2 className="homeHeroTagline">I solve visual problems.</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;