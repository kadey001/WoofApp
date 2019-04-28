import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import { Button, Input, Form} from 'semantic-ui-react'

const SignUpPage = () => (
    <div>
        <h1>Sign Up</h1>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    error: null,
}

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE}
    }

    onSubmit = event => {
        const { username, email, password } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                //Create a user in Firestore
                return this.props.firebase.user(authUser.user.uid).set({
                    username,
                    email,
                });
            
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '' ||
            username === '';

        return (
            <Form>
                <form onSubmit={this.onSubmit}>
                    <Form.Field width = '3'>
                        <label>Username</label>
                    <Input
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Dog's Name"
                    />
                    </Form.Field>
                    <Form.Field width = '3'>
                        <label>Email</label>
                    <Input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    </Form.Field>
                    <Form.Field width = '3'>
                        <label>Password</label>
                    <Input
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    </Form.Field>
                    <Button className="ui button" type="submit" secondary disabled={isInvalid}>Sign Up</Button>

                    {error && <p>{error.message}</p>}
                </form>
            </Form>
        );
    }
}

const SignUpLink = () => (
    <p>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
)

const SignUpForm = compose(
    withRouter,
    withFirebase,
    )(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };