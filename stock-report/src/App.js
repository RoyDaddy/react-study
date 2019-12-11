import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbars from './components/Navbars';
import Calculator from './components/Calculator';

function App() {
  return (
    <Container>
      <Row>
        <Navbars />
      </Row>
      <Row>
        <Col xs={12}>
          <Calculator />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
