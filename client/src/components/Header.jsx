import React from 'react';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

export default function Header({visible}) {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Algorithms</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    {visible && (
                        <Nav>
                            <Button variant="success" href="/register">Get Started</Button>
                            <Nav.Link eventKey={2} href="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

Header.propTypes = {
    visible: PropTypes.boolean,
}