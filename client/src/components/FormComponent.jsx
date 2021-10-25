import React from "react";
import {Form, Button, Stack} from "react-bootstrap";
import PropTypes from 'prop-types';

export default function FormComponent({login, register}) {
    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We will never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {register && (
                <Form.Check type="checkbox" label="I agree with the Privacy / Policy" />
            )}
            {login && (
                <Form.Check type="checkbox" label="Remember Me" />
            )}
            </Form.Group>
            <Stack direction="horizontal" gap={3}>
                <Button variant="success" size="lg" type="submit">
                    Submit
                </Button>
                <div className="vr" />
                {register && (
                    <Button variant="outline-success" href="/login" size="lg">I already have an account</Button>
                )}
                {login && (
                    <Button variant="outline-success" href="/register" size="lg">Create an account</Button>
                )}
            </Stack>

        </Form>
    );
}

FormComponent.propTypes = {
    login: PropTypes.boolean,
    register: PropTypes.boolean
}