import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

export default function LoginPage({ handleSignUpOrLogin }) {
    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await userService.login(state);
            handleSignUpOrLogin();
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <Grid
            textAlign="center"
            style={{ height: "100vh", width: "100vw" }}
            verticalAlign="middle"
        >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="red" textAlign="center">
                    <Image src="https://i.imgur.com/2pWgmoI.png" /> Log In
                </Header>
                <Form onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Form.Input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={state.email}
                            onChange={handleChange}
                            required
                        />
                        <Form.Input
                            name="password"
                            type="password"
                            placeholder="password"
                            value={state.password}
                            onChange={handleChange}
                            required
                        />
                        <Button type="submit" className="btn" color="red">Login</Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <Link to="/signup">Sign Up</Link>
                </Message>
                {error ? <ErrorMessage error={error} /> : null}
            </Grid.Column>
        </Grid>
    );
}
