import * as React from 'react';
import useForm from '../hooks/useForm';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Error from '../ErrorMessage';
import FormStyles from './styles/FormStartService';
import InputText from '../styles/InputText';
import InputSelect from '../styles/InputSelect';
import ButtonPrimary from '../styles/ButtonPrimary';
import TextCSS from './styles/TextCC';
import User from '../User';
import Loading from '../Loading';
import { LIST_SERVICES } from './ViewServices';

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
  ) {
    updateServiceStart(
      source: $source
      record: $record
      licensePlate: $licensePlate
    ) {
      id
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

const GET_SERVICE_QUERY = gql`
  query GET_SERVICE_QUERY($id: ID!) {
    service(id: $id) {
      source {
        id
      }
      record
      licensePlate
    }
  }
`;

interface Props {
  id: string;
}

const StartService: React.FunctionComponent<Props> = props => {
  const { values, handleChange, handleSubmit, resetValues } = useForm(null);

  const withId = props.id;
  console.log(withId);

  const result = {};

  return (
    <User>
      {({ data, loading }) => {
        const { me } = data || {};
        if (loading) return <Loading />;
        return (
          <Query
            query={GET_SERVICE_QUERY}
            variables={{ id: withId }}
            skip={!withId}
          >
            {({ data }) => {
              const { service } = data || {};
              console.log(values);

              return (
                <Mutation
                  mutation={withId ? UPDATE_SERVICE : CREATE_SERVICE}
                  variables={withId ? { ...values, id: withId } : values}
                  onCompleted={() => {
                    resetValues();
                  }}
                  refetchQueries={[{ query: LIST_SERVICES }]}
                >
                  {(mutation, { error, loading }) => {
                    console.log(values);
                    if (loading) return <Loading />;
                    return (
                      <FormStyles
                        onSubmit={e => {
                          handleSubmit(e, mutation);
                        }}
                      >
                        <div>
                          <h3>Comenzar servicio</h3>

                          <Error error={error} />

                          <TextCSS>
                            <span>CC: </span> {me && me.cc}{' '}
                            {!me && 'Logueate por favor'}
                          </TextCSS>
                          <Query query={ALL_COLLECTIONS_QUERY}>
                            {({ data, loading, error }) => {
                              const { collections } = data || {};
                              if (loading) return <p>Cargando...</p>;
                              if (error) return <p>Error</p>;
                              return (
                                <InputSelect
                                  name="source"
                                  value={service ? service.source.id : ''}
                                  onChange={handleChange}
                                  required
                                >
                                  <option value="">Fuente</option>
                                  {collections.map(collection => {
                                    return (
                                      <option
                                        key={collection.id}
                                        value={collection.id}
                                      >
                                        {collection.name}
                                      </option>
                                    );
                                  })}
                                </InputSelect>
                              );
                            }}
                          </Query>
                          <InputText
                            type="text"
                            name="record"
                            placeholder="Expediente"
                            defaultValue={service ? service.record : ''}
                            onChange={handleChange}
                            required
                          />
                          <InputText
                            type="text"
                            className="license"
                            name="licensePlate"
                            placeholder="Placa del cliente"
                            value={service ? service.licensePlate : ''}
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
          </Query>
        );
      }}
    </User>
  );
};

export default StartService;
