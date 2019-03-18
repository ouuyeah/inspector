import * as React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Swipeout from 'rc-swipeout';
import Link from 'next/link';
import Router from 'next/router';
import User from '../User';

import CollectionsStyles from '../collections/styles/CollectionsStyles';
import Loading from '../Loading';

const LIST_INSPECTIONS = gql`
  query LIST_INSPECTIONS($id: ID) {
    inspections(where: { user: { id: $id } }) {
      id
      licensePlate
      source {
        name
      }
      record
      createdAt
    }
  }
`;

const Inspections: React.FunctionComponent = () => {
  return (
    <User>
      {({ data: { me = {} } }) => (
        <Query query={LIST_INSPECTIONS}>
          {({ data, loading }) => {
            const { inspections } = data || {};

            if (!inspections) return <p>No puedes estar acá :(</p>;
            if (loading) return <Loading />;

            return (
              <CollectionsStyles>
                <div className="titles">
                  <h3>Hola {me.name}, tus inspecciones</h3>
                  <Link href="/inspections/start">
                    <a>Crear</a>
                  </Link>
                </div>

                {inspections.map(inspection => (
                  <div className="wrapper-list" key={inspection.id}>
                    <Swipeout
                      right={[
                        {
                          text: 'Editar',
                          onPress: () =>
                            Router.push({
                              pathname: '/inspections/start',
                              query: { id: inspection.id },
                            }),
                          className: 'edit',
                        },
                      ]}
                    >
                      <div className="list">
                        <div>
                          <p>{inspection.source.name}</p>
                          <span className="type">{inspection.record}</span>
                          <span className="user">
                            Por: {inspection.licensePlate}
                          </span>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div className="arrow-right" />
                        </div>
                      </div>
                    </Swipeout>
                  </div>
                ))}
              </CollectionsStyles>
            );
          }}
        </Query>
      )}
    </User>
  );
};

export { LIST_INSPECTIONS };
export default Inspections;
