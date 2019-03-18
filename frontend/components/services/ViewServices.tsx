import * as React from 'react';
import { useState } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Swipeout from 'rc-swipeout';
import Collapse from 'rc-collapse';
import Link from 'next/link';
import Router from 'next/router';
import User from '../User';

import CollectionsStyles from '../collections/styles/CollectionsStyles';
import Loading from '../Loading';

const LIST_SERVICES = gql`
  query LIST_SERVICES($id: ID) {
    services(where: { user: { id: $id } }) {
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

const Services: React.FunctionComponent = () => {
  const Panel = Collapse.Panel;
  const [activeKey, setActiveKey] = useState(['4']);

  const changeKey = activeKey => {
    console.log(activeKey);
    setActiveKey(activeKey);
  };
  let count = 0;
  return (
    <User>
      {({ data: { me = {} } }) => (
        <Query query={LIST_SERVICES}>
          {({ data, loading }) => {
            const { services } = data || {};

            if (!services) return <p>No puedes estar acá :(</p>;
            if (loading) return <Loading />;

            return (
              <CollectionsStyles>
                <div className="titles">
                  <h3>Hola {me.name}, tus inspecciones</h3>
                  <Link href="/services/start">
                    <a>Crear</a>
                  </Link>
                </div>
                <Collapse onChange={changeKey} activeKey={activeKey}>
                  {services.map(service => {
                    return (
                      <Panel header="hello" key={count++}>
                        <Swipeout
                          right={[
                            {
                              text: 'Editar',
                              onPress: () =>
                                Router.push({
                                  pathname: '/services/start',
                                  query: {
                                    id: service.id,
                                  },
                                }),
                              className: 'edit',
                            },
                          ]}
                        >
                          <div className="list">
                            <div>
                              <p>{service.source.name}</p>
                              <span className="type">{service.record}</span>
                              <span className="user">
                                Por: {service.licensePlate}
                              </span>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                              <div className="arrow-right" />
                            </div>
                          </div>
                        </Swipeout>
                      </Panel>
                    );
                  })}
                </Collapse>
              </CollectionsStyles>
            );
          }}
        </Query>
      )}
    </User>
  );
};

export { LIST_SERVICES };
export default Services;
