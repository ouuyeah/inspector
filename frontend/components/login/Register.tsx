import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import validate from './lib/RegisterFormValidation';
import useForm from '../hooks/useForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Error from '../ErrorMessage';
import LoginStyles from './styles/LoginStyles';
import ButtonPrimary from '../styles/ButtonPrimary';
import InputLogin from './styles/InputLogin';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $nickname: String!
    $cc: Int!
    $name: String
    $password: String!
  ) {
    signup(
      email: $email
      nickname: $nickname
      name: $name
      password: $password
      cc: $cc
    ) {
      user {
        id
        email
        nickname
        cc
        name
      }
    }
  }
`;

const SignUp: React.FunctionComponent = () => {
  const { values, errors, handleChange, handleSubmit, resetValues } = useForm(
    validate,
  );

  return (
    <Mutation
      mutation={SIGNUP_MUTATION}
      variables={values}
      onCompleted={() => {
        resetValues();
        toast('Wow so easy !');
      }}
    >
      {(signup, { error, loading }) => {
        return (
          <LoginStyles>
            <ToastContainer />
            <img src="/static/logo-sapco.png" alt="Logo Sapco" />

            <h3>Salvando al mundo de accidentes de tránsito </h3>

            <form
              method="post"
              onSubmit={e => {
                e.preventDefault();
                handleSubmit(e, signup);
              }}
              autoComplete="off"
            >
              <Error error={error} />

              <InputLogin
                type="text"
                name="name"
                placeholder="Nombre completo"
                onChange={handleChange}
                value={values.name || ''}
                required
              />

              <InputLogin
                type="number"
                name="cc"
                placeholder="Cédula de ciudadania"
                onChange={handleChange}
                value={parseInt(values.cc) || ''}
                required
              />

              <InputLogin
                type="text"
                name="nickname"
                placeholder="Nombre de usuario"
                className={`input ${errors.nickname && 'is-danger'}`}
                onChange={handleChange}
                value={values.nickname || ''}
              />
              {errors.nickname && (
                <p className="help is-danger">{errors.nickname}</p>
              )}

              <InputLogin
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className={`input ${errors.email && 'is-danger'}`}
                onChange={handleChange}
                value={values.email || ''}
              />
              {errors.email && <p className="help is-danger">{errors.email}</p>}
              <InputLogin
                type="password"
                name="password"
                className={`input ${errors.password && 'is-danger'}`}
                placeholder="Contraseña"
                onChange={handleChange}
                value={values.password || ''}
              />
              {errors.password && (
                <p className="help is-danger">{errors.password}</p>
              )}

              <ButtonPrimary login>
                Registra{loading ? 'ndo' : 'r'} usuario
              </ButtonPrimary>
            </form>
          </LoginStyles>
        );
      }}
    </Mutation>
  );
};

export default SignUp;
