import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react';

function isPasswordMatch(passwordOne, passwordConf) {
    return passwordOne === passwordConf;
}

export default function SignUpPage({ handleSignUpOrLogin }) {
    const [error, setError] = useState({
        message: '',
        passwordError: false
    });
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: ''
    });
    const [selectedFile, setSelectedFile] = useState('');
    const navigate = useNavigate();

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!isPasswordMatch(state.password, state.passwordConf)) {
            return setError({
                message: 'Passwords Do Not Match',
                passwordError: true
            });
        }
        if (!selectedFile) {
            return setError({
                message: 'Please Upload A Profile Image'
            });
        }
        setError({
            message: '',
            passwordError: false
        });
        const formData = new FormData();
        formData.append('photo', selectedFile);
        for (let key in state) {
            formData.append(key, state[key]);
        }
        console.log(formData.forEach(e => console.log(e, '<<< Each element in formData')));
        try {
            await userService.signup(formData);
            handleSignUpOrLogin();
            navigate('/');
        } catch (err) {
            console.log(err);
            setError({
                message: err.message,
                passwordError: false
            });
        }
    }

    function handleFileInput(e) {
        console.log(e.target.files, '<<< e.target.files');
        setSelectedFile(e.target.files[0]);
    }

    return (
        <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="red" textAlign="center">
                    <Image src="https://i.imgur.com/TAtWfEl.png" />Join Mecha Mecca
                </Header>
                <Form onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Form.Input
                            name="username"
                            placeholder="username"
                            value={state.username}
                            onChange={handleChange}
                            required
                        />
                        <Form.Input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={state.email}
                            onChange={handleChange}
                            required
                        />
                        <Form.Input
                            error={error.passwordError}
                            name="password"
                            type="password"
                            placeholder="password"
                            value={state.password}
                            onChange={handleChange}
                            required
                        />
                        <Form.Input
                            error={error.passwordError}
                            name="passwordConf"
                            type="password"
                            placeholder="Confirm Password"
                            value={state.passwordConf}
                            onChange={handleChange}
                            required
                        />
                        <Form.Field>
                            <Form.Input
                                type="file"
                                name="photo"
                                placeholder="upload image"
                                onChange={handleFileInput}
                                
                            />
                        </Form.Field>
                        <Button type="submit" className="btn" color="red">Join Now! </Button>
                    </Segment>
                    {error.message ? <ErrorMessage error={error.message} /> : null}
                </Form>
                <Message>
                    Already have an account? <Link to="/login">Log In</Link>
                </Message>
            </Grid.Column>
        </Grid>
    );
}
