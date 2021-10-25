import React from "react";
import { Container, Col, Card } from "react-bootstrap";
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
        <Col>
          <Card style={{ width: '50rem' }}>
            <Card.Body>
              <FormComponent {...loginConfig} />
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
}
