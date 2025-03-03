import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5199/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();

        setRedirect(true);
        props.setUsername('');
    }

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <div className="container w-96 mt-5">
            <Card className="shadow">
                <Card.Body className="p-5">
                    <Card.Title className="text-center mb-4">Login</Card.Title>
                    <Form onSubmit={submit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <div className="d-grid">
                            <Button variant="dark" type="submit" size="md">
                                Login
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;