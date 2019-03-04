import * as React from 'react';
import FormStyles from './styles/FormStartInspection';
import InputText from '../styles/InputText';
import ButtonPrimary from '../styles/ButtonPrimary';

const StartInspection: React.FunctionComponent = () => {
  const handleSubmit = () => async e => {
    e.preventDefault();
    // Persist the event so we can clear the form later
    e.persist();
  };
  const inspection = {};
  const result = {};

  return (
    <FormStyles style={{ textAlign: 'center' }} onSubmit={handleSubmit()}>
      <div>
        <h3>Comenzar inspección</h3>
        <InputText
          type="number"
          name="cc"
          placeholder="Escribe tu cédula"
          defaultValue={inspection.cc || ''}
          required
        />
        <InputText
          type="text"
          name="source"
          placeholder="Fuente"
          defaultValue={inspection.source || ''}
          required
        />
        <InputText
          type="text"
          name="record"
          placeholder="Expediente"
          defaultValue={inspection.record || ''}
          required
        />
        <InputText
          type="text"
          name="licensePlate"
          placeholder="Placa del cliente"
          defaultValue={inspection.licensePlate || ''}
          required
        />
      </div>

      {result.loading && <p>Cargando...</p>}
      {result.error && <p>Ha ocurrido un error, intenta de nuevo.</p>}

      <ButtonPrimary type="submit" className="btn" disabled={result.loading}>
        Inspeccionar
      </ButtonPrimary>
    </FormStyles>
  );
};

export default StartInspection;
