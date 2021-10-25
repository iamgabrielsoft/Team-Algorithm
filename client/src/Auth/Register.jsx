import React from "react";
import { Container, Col, Card } from "react-bootstrap";
import Header from "../components/Header";
import FormComponent from "../components/FormComponent";
// import google_svg from "assets/img/google.svg"

export default function Register() {
  const registerConfig = {
    login: false,
    register: true
  }
  return (
    <>
     <Header visible={false}/>
     <br />
      <Container>
        <Col>
          <Card style={{ width: '50rem' }}>
            <Card.Body>
              <FormComponent {...registerConfig} />
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
}
