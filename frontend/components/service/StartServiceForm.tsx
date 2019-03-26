import * as React from 'react';

import { useFormState } from 'react-use-form-state';

import Error from '../ErrorMessage';
import FormStyles from './styles/FormStartService';
import InputText from '../styles/InputText';
import InputSelect from '../styles/InputSelect';
import ButtonPrimary from '../styles/ButtonPrimary';
import TextCSS from './styles/TextCC';
import { LIST_SERVICES } from './ViewServices';
import { GET_SERVICE_QUERY } from './StartService';
import Loading from '../Loading';
import Router from 'next/router';

const CREATE_SERVICE = gql`
  mutation CREATE_SERVICE(
    $source: String!
    $record: String!
    $licensePlate: String!
  ) {
    createServiceStart(
      source: $source
      record: $record
      licensePlate: $licensePlate
    ) {
      id
    }
  }
`;

const UPDATE_SERVICE = gql`
  mutation UPDATE_SERVICE(
    $source: String!
    $record: String!
    $licensePlate: String!
    $id: ID!
  ) {
    updateServiceStart(
      source: $source
      record: $record
      licensePlate: $licensePlate
      id: $id
    ) {
      id
      record
    }
  }
`;

const ALL_COLLECTIONS_QUERY = gql`
  query ALL_COLLECTIONS_QUERY {
    collections(where: { type: SOURCE }) {
      id
      type
      name
    }
  }
`;

interface Props {
  me: {
    cc: string;
  };
  service?: {
    id: string;
    source: {
      id: string;
    };
    record: string;
    licensePlate: string;
  };
}

const StartServiceForm: React.FunctionComponent<Props> = ({ me, service }) => {
  const id = service && service.id;
  const initialState = service
    ? {
        source: service.source.id,
        record: service.record,
        licensePlate: service.licensePlate,
      }
    : {};

  const [formState, { text, select }] = useFormState(initialState);

  return (
    <Mutation
      mutation={id ? UPDATE_SERVICE : CREATE_SERVICE}
      variables={id ? { ...formState.values, id } : formState.values}
      onCompleted={data => {
        console.log('completado', data);
      }}
      refetchQueries={[
        {
          query: id ? GET_SERVICE_QUERY : LIST_SERVICES,
          variables: id ? { id } : {},
        },
      ]}
    >
      {(mutation, { error, loading }) => {
        if (loading) return <Loading />;

        return (
          <FormStyles
            onSubmit={e => {
              e.preventDefault();
              const noChanges =
                JSON.stringify(initialState) ===
                JSON.stringify(formState.values);
              if (noChanges) {
                Router.push({
                  pathname: '/services/first-description',
                  query: { id },
                });
              }
              //mutation();
            }}
          >
            <div>
              <h3>Comenzar servicio</h3>

              <Error error={error} />

              <TextCSS>
                <span>CC: </span> {me && me.cc} {!me && 'Logueate por favor'}
              </TextCSS>
              <Query query={ALL_COLLECTIONS_QUERY}>
                {({ data, loading, error }) => {
                  const { collections } = data || {};
                  if (loading) return <p>Cargando...</p>;
                  if (error) return <p>Error</p>;
                  return (
                    <InputSelect {...select('source')} required>
                      <option value="">Fuente</option>
                      {collections.map(collection => {
                        return (
                          <option key={collection.id} value={collection.id}>
                            {collection.name}
                          </option>
                        );
                      })}
                    </InputSelect>
                  );
                }}
              </Query>
              <InputText
                {...text('record')}
                placeholder="Expediente"
                required
              />
              <InputText
                {...text('licensePlate')}
                className="license"
                placeholder="Placa del cliente"
                required
              />
            </div>

            <ButtonPrimary type="submit" className="btn" disabled={loading}>
              {id ? 'Actualizar servicio' : 'Empezar servicio'}
            </ButtonPrimary>
          </FormStyles>
        );
      }}
    </Mutation>
  );
};

export default StartServiceForm;
