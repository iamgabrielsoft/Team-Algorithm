import React from "react";
import { Container, Col, Card, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import FormComponent from "../components/FormComponent";
import Header from "../components/Header";


export default function Login() {
  const loginConfig = {
    login: true,
    register: false
  }
  return (
    <>
     <Header visible={false}/>
     <br />
      <Container>
        <Row>
            <Col>
            </Col>
            <Col>
              <Card style={{ width: '50rem' }} border="success">
                  <Card.Body>
                    <FormComponent {...loginConfig} />
                  </Card.Body>
              </Card>        
            </Col>
            <Col>
            </Col>       
        </Row>
      </Container>
    </>
  );
}
