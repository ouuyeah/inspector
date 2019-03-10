import * as React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { format, parseISO } from 'date-fns';

import CollectionsStyles from './styles/CollectionsStyles';
import GridTable from './styles/GridTable';

import Loading from '../Loading';

const possibleCollections = [
  {
    value: 'SOURCE',
    name: 'Fuente',
  },
];

const LIST_COLLECTIONS = gql`
  query {
    collections(orderBy: name_ASC) {
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
      {({ data: { collections }, loading }) => {
        return (
          <CollectionsStyles>
            <h2>Listado de colecciones</h2>
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

export default Collections;
