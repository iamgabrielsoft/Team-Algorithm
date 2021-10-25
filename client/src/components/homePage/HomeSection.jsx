import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap"

export default function HomeSection() {
    return(
        <>
            <Container fluid="md">
                <Row>
                    <Col>
                    <Stack gap={3}>
                        <br />
                        <br />
                        <div>
                            <h1>
                                A Better way to store and access your content
                            </h1>
                        </div>
                        <div>
                            <p>Store your content with us from any device or platform.</p>
                        </div>
                        <Stack gap={2} direction="horizontal">
                            <Button variant="success" size="lg">Get Started</Button>
                            <Button variant="outline-secondary" size="lg">Login</Button>
                        </Stack>
                    </Stack>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}
