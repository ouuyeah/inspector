import { GraphQLClient } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache';
import unfetch from 'isomorphic-unfetch';
import { endpoint } from '../config';
import { isBrowser } from './isBrowser';

if (!isBrowser) {
  (global as any).fetch = fetch;
}

let graphQLClient: GraphQLClient = null;

function create(initialState = {}, { getToken }) {
  console.log(getToken(), 'token cliente');

  return new GraphQLClient({
    ssrMode: !process.browser,
    url: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    cache: memCache({ initialState }),
    fetchOptions: {
      credentials: 'include',
    },
    headers: getToken(),
    fetch: process.browser ? fetch.bind() : unfetch, // eslint-disable-line
  });
}

export default function initGraphQL(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!graphQLClient) {
    graphQLClient = create(initialState, options);
  }

  return graphQLClient;
}
