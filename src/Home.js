import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container className="sectionContainer" id="home">
      <Row>
        <Col>
        <h5>Hello my name is</h5>
        <h1>Charles Kantz</h1>
        <h1>I build websites.</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;