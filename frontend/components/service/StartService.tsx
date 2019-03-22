import * as React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import StartServiceForm from './StartServiceForm';

import User from '../User';
import Loading from '../Loading';

const GET_SERVICE_QUERY = gql`
  query GET_SERVICE_QUERY($id: ID!) {
    service(id: $id) {
      id
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

const StartService: React.FunctionComponent<Props> = ({ id }) => {
  return (
    <User>
      {({ data, loading }) => {
        const { me } = data || {};
        if (loading) return <Loading />;
        return (
          <Query query={GET_SERVICE_QUERY} variables={{ id }} skip={!id}>
            {({ data, loading }) => {
              const { service } = data || {};

              if (loading) return <Loading />;

              return (
                <StartServiceForm
                  key={service ? service.id : 1}
                  me={me}
                  service={service}
                />
              );
            }}
          </Query>
        );
      }}
    </User>
  );
};

export { GET_SERVICE_QUERY };
export default StartService;
