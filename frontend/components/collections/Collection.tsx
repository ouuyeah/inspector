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
import Router from 'next/router';
import { LIST_COLLECTIONS } from './Collections';

const possibleCollections = [
  {
    value: 'SOURCE',
    name: 'Fuente',
  },
];

const UPSERT_COLLECTION = gql`
  mutation UPSERT_COLLECTION($name: String, $type: CollectionType, $id: ID) {
    upsertCollection(name: $name, type: $type, id: $id) {
      id
      name
    }
  }
`;

const Collection: React.FunctionComponent = props => {
  const { values, handleChange, handleSubmit, resetValues } = useForm(null);
  const withId = props.id;
  console.log({ ...values, id: withId });
  const data = { ...values, id: withId };

  return (
    <Mutation
      mutation={UPSERT_COLLECTION}
      variables={data}
      refetchQueries={[{ query: LIST_COLLECTIONS }]}
      onCompleted={() => {
        Router.push('/collections/view');
      }}
    >
      {(upsertCollection, { error, loading }) => {
        if (loading) return <Loading />;

        return (
          <CollectionStyles
            onSubmit={e => {
              handleSubmit(e, upsertCollection);
            }}
          >
            <div>
              <ReactTooltip place="bottom" effect="solid" />
              <h3>
                {withId ? 'Actualizar ' : 'Crear '} dato
                <Help
                  data-tip="Aquí puedes crear o actualizar las colecciones de datos que
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
              {withId ? 'Actualizar' : 'Crear'}
            </ButtonPrimary>
          </CollectionStyles>
        );
      }}
    </Mutation>
  );
};

export default Collection;
