import * as React from 'react';
import useForm from '../hooks/useForm';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import FormStyles from './styles/FormStartInspection';
import InputText from '../styles/InputText';
import ButtonPrimary from '../styles/ButtonPrimary';
import TextCSS from './styles/TextCC';
import User from '../User';
import Loading from '../Loading';

const START_INSPECTION = gql`
  mutation START_INSPECTION(
    $source: String!
    $record: String!
    $licensePlate: Int!
  ) {
    createInspection(
      source: $source
      record: $record
      licensePlate: $licensePlate
    ) {
      Inspection {
        id
        record
      }
    }
  }
`;

const StartInspection: React.FunctionComponent = () => {
  const { values, handleChange, handleSubmit, resetValues } = useForm(null);

  const inspection = {};
  const result = {};

  return (
    <User>
      {({ data, loading }) => {
        const { me } = data || {};
        if (loading) return <Loading />;
        return (
          <Mutation
            mutation={START_INSPECTION}
            variables={values}
            onCompleted={() => {
              resetValues();
            }}
          >
            {(createInspection, { error, loading }) => {
              return (
                <FormStyles
                  onSubmit={e => {
                    handleSubmit(e, createInspection);
                  }}
                >
                  <div>
                    <h3>Comenzar inspección</h3>

                    <TextCSS>
                      <span>CC: </span> {me && me.cc}{' '}
                      {!me && 'Logueate por favor'}
                    </TextCSS>
                    <InputText
                      type="text"
                      name="source"
                      placeholder="Fuente"
                      value={values.source || ''}
                      onChange={handleChange}
                      required
                    />
                    <InputText
                      type="text"
                      name="record"
                      placeholder="Expediente"
                      value={values.record || ''}
                      onChange={handleChange}
                      required
                    />
                    <InputText
                      type="text"
                      name="licensePlate"
                      placeholder="Placa del cliente"
                      value={values.licensePlate || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {result.loading && <p>Cargando...</p>}
                  {result.error && (
                    <p>Ha ocurrido un error, intenta de nuevo.</p>
                  )}

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
          </Mutation>
        );
      }}
    </User>
  );
};

export default StartInspection;
