import * as React from 'react';
import { useState } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Swipeout from 'rc-swipeout';
import Collapse from 'rc-collapse';
import Link from 'next/link';
import Router from 'next/router';
import User from '../User';

import ViewStyles from './styles/ViewStyles';
import ButtonLink from '../styles/ButtonLink';
import Loading from '../Loading';

const serviceStates = [
  {
    value: 'PROCESS',
    name: 'En proceso',
  },
  {
    value: 'CANCELED',
    name: 'Cancelado',
  },
  {
    value: 'FAILED',
    name: 'Fallido',
  },
  {
    value: 'FINALIZED',
    name: 'Finalizado',
  },
];

const LIST_SERVICES = gql`
  query LIST_SERVICES($id: ID) {
    services(where: { user: { id: $id } }) {
      id
      licensePlate
      state
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
  const [activeKey, setActiveKey] = useState([]);

  const changeKey = activeKey => {
    setActiveKey(activeKey);
  };
  let count = 0;
  return (
    <User>
      {({ data: { me = {} } }) => (
        <Query query={LIST_SERVICES}>
          {({ data, loading }) => {
            const { services } = data || {};
            const name = me.name.substr(0, me.name.indexOf(' '));

            if (!services) return <p>No puedes estar acá :(</p>;
            if (loading) return <Loading />;

            return (
              <ViewStyles>
                <div className="titles">
                  <h3>Hola {name}, tus servicios: </h3>
                  <Link href="/services/start">
                    <ButtonLink>Crear</ButtonLink>
                  </Link>
                </div>
                <Collapse onChange={changeKey} activeKey={activeKey}>
                  {services.map(service => {
                    return (
                      <Panel
                        className={`info-${service.state}`}
                        header={`Exp: ${service.record}`}
                        extra={serviceStates.map(state => {
                          if (state.value == service.state) return state.name;
                        })}
                        key={count++}
                      >
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
              </ViewStyles>
            );
          }}
        </Query>
      )}
    </User>
  );
};

export { LIST_SERVICES };
export default Services;
