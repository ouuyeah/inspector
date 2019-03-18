import * as React from 'react';
import { NextFunctionComponent } from 'next';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import useForm from '../hooks/useForm';

import Error from '../ErrorMessage';
import User from '../User';

import LoginStyles from './styles/LoginStyles';
import ButtonPrimary from '../styles/ButtonPrimary';
import InputLogin from './styles/InputLogin';
import { CURRENT_USER_QUERY } from '../User';
import Router from 'next/router';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($emailOrNick: String!, $password: String!) {
    login(email: $emailOrNick, password: $password) {
      user {
        id
        email
        name
      }
    }
  }
`;

const LoginPage: NextFunctionComponent = props => {
  const { values, handleChange, handleSubmit } = useForm(null);

  return (
    <User skip={!props.hasLoginToken}>
      {({ data }) => {
        return (
          <Mutation
            mutation={SIGNIN_MUTATION}
            variables={values}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            onCompleted={() => Router.push({ pathname: '/services/view' })}
          >
            {(login, { error, loading }) => {
              const { me } = data || {};

              return (
                <LoginStyles>
                  <img src="/static/logo-sapco.png" alt="Logo Sapco" />

                  <h3>Salvando al mundo de accidentes de tránsito </h3>

                  <form
                    method="post"
                    onSubmit={e => {
                      handleSubmit(e, login);
                    }}
                  >
                    <Error error={error} />

                    <InputLogin
                      type="email"
                      name="emailOrNick"
                      placeholder="Correo electrónico"
                      onChange={handleChange}
                      value={values.emailOrNick || ''}
                      required
                    />
                    <InputLogin
                      type="password"
                      name="password"
                      placeholder="Contraseña"
                      onChange={handleChange}
                      value={values.password || ''}
                      required
                    />
                    <ButtonPrimary login> Entrar </ButtonPrimary>
                  </form>
                </LoginStyles>
              );
            }}
          </Mutation>
        );
      }}
    </User>
  );
};

export default LoginPage;
