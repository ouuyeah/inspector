import React, { Fragment, useState } from 'react';
import { NextFunctionComponent } from 'next';
import { useMutation } from 'graphql-hooks';

import { useFormState } from 'react-use-form-state';

import Loading from '../Loading';
import Error from '../ErrorMessage';
import User from '../User';

import LoginStyles from './styles/LoginStyles';
import ButtonPrimary from '../styles/ButtonPrimary';
import InputLogin from './styles/InputLogin';

import { CURRENT_USER_QUERY } from '../User';
import Router from 'next/router';

const SIGNIN_MUTATION = `
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

const LoginPage: NextFunctionComponent = props => {
  const [formState, { text, password }] = useFormState({});

  const [signIn, { graphQLErrors, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: { ...formState.values },
  });

  if (loading) return <Loading />;
  return (
    <User>
      <LoginStyles>
        <img src="/static/logo-sapco.png" alt="Logo Sapco" />
        <h3>Salvando al mundo de accidentes de tránsito </h3>

        <form
          method="post"
          onSubmit={async e => {
            e.preventDefault();
            try {
              await signIn().then(({ error }) => {
                if (!error) {
                  Router.push({ pathname: '/services/view' });
                }
              });
            } catch (e) {
              console.error('error upvoting post', e);
            }
          }}
        >
          <Error error={graphQLErrors} />
          <InputLogin
            type="email"
            placeholder="Correo electrónico"
            {...text('email')}
            required
          />
          <InputLogin
            type="password"
            placeholder="Contraseña"
            {...password('password')}
            required
          />
          <ButtonPrimary login> Entrar </ButtonPrimary>
        </form>
      </LoginStyles>
    </User>
  );
};

export default LoginPage;
