import React from 'react';
import LoginStyles from './styles/LoginStyles';
import LoginButton from '../styles/LoginButton';
import InputText from '../styles/InputText';

const SignUp: React.FunctionComponent = () => {
  const handleSubmit = () => async e => {
    e.preventDefault();
    // Persist the event so we can clear the form later
    e.persist();
  };

  return (
    <LoginStyles>
      <img src="/static/logo-sapco.png" alt="Logo Sapco" />

      <h3>Salvando al mundo de accidentes de tránsito </h3>

      <form onSubmit={handleSubmit()}>
        <InputText
          type="text"
          name="name"
          placeholder="Nombre completo"
          required
        />
        <InputText
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
        />
        <InputText
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <LoginButton> Entrar </LoginButton>
      </form>
    </LoginStyles>
  );
};

export default SignUp;
