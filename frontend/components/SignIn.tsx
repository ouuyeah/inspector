import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import User from './User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
        name
      }
    }
  }
`;

class SignIn extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    hasLogin: false,
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <User skip={!this.props.hasLoginToken && !this.state.hasLogin}>
        {({ data }) => {
          return (
            <Mutation
              mutation={SIGNIN_MUTATION}
              variables={this.state}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
              onCompleted={() => this.setState({ hasLogin: true })}
            >
              {(signup, { error, loading }) => {
                const { me } = data || {};

                return (
                  <Form
                    method="post"
                    onSubmit={async e => {
                      e.preventDefault();
                      await signup();
                      this.setState({ name: '', email: '', password: '' });
                    }}
                  >
                    {!me && <h2>No estas logueado bb</h2>}
                    {me && (
                      <div>
                        <h2>Hola {me.name}</h2>
                      </div>
                    )}
                    <fieldset disabled={loading} aria-busy={loading}>
                      <h2>Sign into your account</h2>
                      <Error error={error} />

                      <label htmlFor="email">
                        Email
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.saveToState}
                        />
                      </label>
                      <label htmlFor="password">
                        Password
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.saveToState}
                        />
                      </label>

                      <button type="submit">Sign In</button>
                    </fieldset>
                  </Form>
                );
              }}
            </Mutation>
          );
        }}
      </User>
    );
  }
}

export default SignIn;
