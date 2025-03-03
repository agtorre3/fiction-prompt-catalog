import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:5199/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="container w-96 mt-5">
            <Card className="shadow">
                <Card.Body className="p-5">
                    <Form onSubmit={submit}>
                        <Card.Title className="text-center mb-4">Sign Up</Card.Title>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <div className="d-grid">
                            <Button variant="dark" type="submit" size="md">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SignUp;