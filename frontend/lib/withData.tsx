import withApollo, { InitApolloClient } from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';

const createClient: InitApolloClient<any> = ({ headers }) =>
  new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: async operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });

export default withApollo(createClient);
