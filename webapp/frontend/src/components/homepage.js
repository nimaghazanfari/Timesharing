import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Carousal from './carousal';

function Homepage() {
  const bg_sm = { backgroundColor: "lightgrey", opacity: '0.8' };

  return (
    <>
      <Container fluid style={bg_sm}>
        <Row>
          <Container>
            <Carousal />
          </Container>
        </Row>
      </Container>
    </>
  );
}


export default Homepage;