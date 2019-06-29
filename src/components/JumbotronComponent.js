import React from 'react';
import heroImage from '../assets/images/seattle.jpg';
import { Container, Row, Col } from 'reactstrap';

class JumbotronComponent extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <div className="text-center">
              <img src={heroImage} alt="" />
            </div>
            <h1 className="text-center rbcNameHeader">Ravenna Brewing Company</h1>
            <p className="text-center rbcNameHeader">Excessively fascinating craft beer.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default JumbotronComponent;