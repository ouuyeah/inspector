import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import LoginStyles from './styles/LoginStyles';
import ButtonPrimary from '../styles/ButtonPrimary';
import InputLogin from './styles/InputLogin';
import useForm from '../hooks/useForm';

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
  const { values, handleChange, handleSubmit } = useForm(login);

  function login() {
    console.log(values);
  }

  return (
    <Mutation mutation={SIGNUP_MUTATION}>
      {(signup, { error, loading }) => {
        return (
          <LoginStyles>
            <img src="/static/logo-sapco.png" alt="Logo Sapco" />

            <h3>Salvando al mundo de accidentes de tránsito </h3>

            <form method="post" onSubmit={handleSubmit}>
              <InputLogin
                type="text"
                name="name"
                placeholder="Nombre completo"
                onChange={handleChange}
                value={values.name}
                required
              />
              <InputLogin
                type="number"
                name="cc"
                placeholder="Cédula de ciudadania"
                onChange={handleChange}
                value={values.cc}
                required
              />
              <InputLogin
                type="email"
                name="email"
                placeholder="Correo electrónico"
                onChange={handleChange}
                value={values.email}
                required
              />
              <InputLogin
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={handleChange}
                value={values.password}
                required
              />

              <ButtonPrimary login> Registrar usuario </ButtonPrimary>
            </form>
          </LoginStyles>
        );
      }}
    </Mutation>
  );
};

export default SignUp;
