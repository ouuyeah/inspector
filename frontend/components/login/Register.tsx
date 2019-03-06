import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import LoginStyles from './styles/LoginStyles';
import ButtonPrimary from '../styles/ButtonPrimary';
import InputLogin from './styles/InputLogin';
import useForm from '../hooks/useForm';
import validate from './lib/RegisterFormValidation';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $cc: Number!
    $name: String
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password, cc: $cc) {
      user {
        id
        email
        cc
        name
      }
    }
  }
`;

const SignUp: React.FunctionComponent = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate,
  );

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <Mutation mutation={SIGNUP_MUTATION}>
      {(signup, { error, loading }) => {
        return (
          <LoginStyles>
            {/*<img src="/static/logo-sapco.png" alt="Logo Sapco" />

        <h3>Salvando al mundo de accidentes de tránsito </h3>*/}

            <form
              method="post"
              onSubmit={handleSubmit}
              autoComplete="off"
              noValidate
            >
              <InputLogin
                type="text"
                name="name"
                placeholder="Nombre completo"
                onChange={handleChange}
                value={values.name || ''}
                required
              />
              <InputLogin
                type="text"
                name="nickname"
                placeholder="Nombre de usuario"
                onChange={handleChange}
                value={values.nickname || ''}
                required
              />
              <InputLogin
                type="number"
                name="cc"
                placeholder="Cédula de ciudadania"
                onChange={handleChange}
                value={values.cc || ''}
                required
              />
              <InputLogin
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className={`input ${errors.email && 'is-danger'}`}
                onChange={handleChange}
                value={values.email || ''}
                required
              />
              {errors.email && <p className="help is-danger">{errors.email}</p>}
              <InputLogin
                type="password"
                name="password"
                className={`input ${errors.password && 'is-danger'}`}
                placeholder="Contraseña"
                onChange={handleChange}
                value={values.password || ''}
                required
              />
              {errors.password && (
                <p className="help is-danger">{errors.password}</p>
              )}

              <ButtonPrimary login> Registrar usuario </ButtonPrimary>
            </form>
          </LoginStyles>
        );
      }}
    </Mutation>
  );
};

export default SignUp;
