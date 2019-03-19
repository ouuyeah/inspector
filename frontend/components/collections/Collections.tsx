import * as React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Swipeout from 'rc-swipeout';
import Link from 'next/link';
import Router from 'next/router';

import ButtonLink from '../styles/ButtonLink';
import CollectionsStyles from './styles/CollectionsStyles';

import Loading from '../Loading';

const possibleCollections = [
  {
    value: 'SOURCE',
    name: 'Fuente',
  },
];

const LIST_COLLECTIONS = gql`
  query {
    collections(orderBy: name_DESC) {
      id
      type
      name
      user {
        name
      }
      createdAt
    }
  }
`;

const Collections: React.FunctionComponent = () => {
  return (
    <Query query={LIST_COLLECTIONS}>
      {({ data, loading }) => {
        const { collections } = data || {};

        if (!collections) return <p>No puedes estar acá :(</p>;
        if (loading) return <Loading />;

        return (
          <CollectionsStyles>
            <div className="titles">
              <h3>Colecciones</h3>
              <Link href="/collections/item">
                <ButtonLink>Crear</ButtonLink>
              </Link>
            </div>

            {collections.map(collection => (
              <div className="wrapper-list" key={collection.id}>
                <Swipeout
                  right={[
                    {
                      text: 'Editar',
                      onPress: () =>
                        Router.push({
                          pathname: '/collections/item',
                          query: { id: collection.id },
                        }),
                      className: 'edit',
                    },
                  ]}
                >
                  <div className="list">
                    <div>
                      <p>{collection.name}</p>
                      <span className="type">
                        {possibleCollections.map(item => {
                          if (item.value == collection.type) return item.name;
                        })}
                      </span>
                      <span className="user">Por: {collection.user.name}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="arrow-right" />
                    </div>
                  </div>
                </Swipeout>
              </div>
            ))}

            {/*
            <GridTable>
              <div className="grid-table-row">
                <div className="grid-table-cell">Nombre</div>
                <div className="grid-table-cell">Tipo</div>
                <div className="grid-table-cell">Creado / Por</div>
                <div className="grid-table-cell">Acciones</div>
              </div>
              {collections.map(collection => (
                <div className="grid-table-row" key={collection.id}>
                  <div className="grid-table-cell" data-title="Nombre">
                    {collection.name}
                  </div>
                  <div className="grid-table-cell" data-title="Tipo">
                    {collection.type}
                  </div>
                  <div className="grid-table-cell" data-title="Creado / Por">
                    {format(parseISO(collection.createdAt), 'MM / d, yyyy')}/{' '}
                    {collection.user.name}
                  </div>
                  <div className="grid-table-cell" data-title="Acciones">
                    05/18/2013
                  </div>
                </div>
              ))}
            </GridTable>*/}
          </CollectionsStyles>
        );
      }}
    </Query>
  );
};

export { LIST_COLLECTIONS };
export default Collections;
