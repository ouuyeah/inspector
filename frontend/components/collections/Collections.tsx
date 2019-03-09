import * as React from 'react';
import useForm from '../hooks/useForm';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import ReactTooltip from 'react-tooltip';

import InputText from '../styles/InputText';
import InputSelect from '../styles/InputSelect';
import ButtonPrimary from '../styles/ButtonPrimary';
import CollectionStyles from './styles/CollectionStyles';
import Help from '../styles/Help';
import Loading from '../Loading';

const possibleCollections = [
  {
    value: 'SOURCE',
    name: 'Fuente',
  },
];

const CREATE_COLLECTION = gql`
  mutation CREATE_COLLECTION($name: String!, $type: String!) {
    createCollection(name: $name, type: $type) {
      id
      name
    }
  }
`;

const StartInspection: React.FunctionComponent = () => {
  const { values, handleChange, handleSubmit, resetValues } = useForm(null);
  console.log(values);
  return (
    <Mutation
      mutation={CREATE_COLLECTION}
      variables={values}
      onCompleted={() => {
        resetValues();
      }}
    >
      {(createCollection, { error, loading }) => {
        if (loading) return <Loading />;

        return (
          <CollectionStyles
            onSubmit={e => {
              handleSubmit(e, createCollection);
            }}
          >
            <div>
              <ReactTooltip place="bottom" effect="solid" />
              <h3>
                Colecciones de datos{' '}
                <Help
                  data-tip="Aquí puedes crear o modificar todas las colecciones de datos que
                usa la aplicación"
                >
                  ?
                </Help>
              </h3>

              <InputText
                type="text"
                name="name"
                placeholder="Nombre"
                value={values.name || ''}
                onChange={handleChange}
                required
              />
              <InputSelect
                name="type"
                value={values.type || ''}
                onChange={handleChange}
                required
              >
                <option value="">Tipo de colección</option>
                {possibleCollections.map(collection => (
                  <option key={collection.value} value={collection.value}>
                    {collection.name}
                  </option>
                ))}
              </InputSelect>
            </div>

            {loading && <p>Cargando...</p>}
            {error && <p>Ha ocurrido un error, intenta de nuevo.</p>}

            <ButtonPrimary type="submit" className="btn" disabled={loading}>
              Crear
            </ButtonPrimary>
          </CollectionStyles>
        );
      }}
    </Mutation>
  );
};

export default StartInspection;
