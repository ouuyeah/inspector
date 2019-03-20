import * as React from 'react';

import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
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
  serviceId: string;
  me: {
    cc: string;
  };
  service: {
    source: {
      id: string;
    };
    record: string;
    licensePlate: string;
  };
}

const StartServiceForm: React.FunctionComponent<Props> = props => {
  const withId = props.serviceId;

  const serviceData = props.service;
  let initialState = {};
  if (serviceData) {
    initialState = {
      source: serviceData.source.id,
      record: serviceData.record,
      licensePlate: serviceData.licensePlate,
    };
  }

  const [formState, { text, select }] = useFormState(initialState);

  return (
    <Mutation
      mutation={withId ? UPDATE_SERVICE : CREATE_SERVICE}
      variables={
        withId ? { ...formState.values, id: withId } : formState.values
      }
      onCompleted={data => {
        console.log('completado', data);
      }}
      refetchQueries={[
        {
          query: withId ? GET_SERVICE_QUERY : LIST_SERVICES,
          variables: withId ? { id: withId } : {},
        },
      ]}
    >
      {(mutation, { error, loading }) => {
        if (loading) return <Loading />;
        return (
          <FormStyles
            onSubmit={e => {
              e.preventDefault();
              mutation();
            }}
          >
            <div>
              <h3>Comenzar servicio</h3>

              <Error error={error} />

              <TextCSS>
                <span>CC: </span> {props.me && props.me.cc}{' '}
                {!props.me && 'Logueate por favor'}
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
              Inspeccionar
            </ButtonPrimary>
          </FormStyles>
        );
      }}
    </Mutation>
  );
};

export default StartServiceForm;
