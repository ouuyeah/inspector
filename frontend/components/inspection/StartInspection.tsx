import * as React from 'react';
import FormStyles from './styles/FormStartInspection';
import InputText from '../styles/InputText';
import ButtonPrimary from '../styles/ButtonPrimary';
import TextCSS from './styles/TextCC';
import User from '../User';

const StartInspection: React.FunctionComponent = () => {
  const handleSubmit = () => async e => {
    e.preventDefault();
    // Persist the event so we can clear the form later
    e.persist();
  };
  const inspection = {};
  const result = {};

  return (
    <User>
      {({ data }) => {
        const { me } = data || {};
        return (
          <FormStyles style={{ textAlign: 'center' }} onSubmit={handleSubmit()}>
            <div>
              <h3>Comenzar inspección</h3>

              <TextCSS>
                <span>CC: </span> {me && me.cc} {!me && 'Logueate por favor'}
              </TextCSS>
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

            <ButtonPrimary
              type="submit"
              className="btn"
              disabled={result.loading}
            >
              Inspeccionar
            </ButtonPrimary>
          </FormStyles>
        );
      }}
    </User>
  );
};

export default StartInspection;
