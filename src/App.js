
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Formulaire Contact</h1>
        <Container fluid>
          <Form>
            <Row>
              <Col md>
                <Form.Group>
                  <Form.Label>YOUR NAME</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </Col>

              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>YOUR EMAIL</Form.Label>
                  <Form.Control type="email" placeholder="Exemple@gmail.com" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
              </Col>

              <Col md>
                <Form.Group>
                  <Form.Label>Please specify your need *</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message *</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </header>

      
    </div>
  );
}

export default App;