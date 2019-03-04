import React from 'react';
import LoginStyles from './styles/LoginStyles';
import ButtonPrimary from '../styles/ButtonPrimary';
import InputLogin from './styles/InputLogin';

const Remember: React.FunctionComponent = () => {
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
        <h4>
          Envíaremos un token para verificar tu identidad al correo que
          indiques.
        </h4>
        <InputLogin
          type="email"
          name="email"
          placeholder="Ingresa tu correo"
          required
        />

        <ButtonPrimary> Solicitar contraseña </ButtonPrimary>
      </form>
    </LoginStyles>
  );
};

export default Remember;
