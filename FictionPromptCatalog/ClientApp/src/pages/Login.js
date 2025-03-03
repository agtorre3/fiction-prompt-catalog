import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5199/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();

        setRedirect(true);
        props.setUsername('name');
    }

    if (redirect) {
        return <Navigate to="/"/>;
    }

    return (
        <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="dark" type="submit">
            Submit
        </Button>
    </Form>
    );
};

export default Login;