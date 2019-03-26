import React from 'react';
import initGraphQL from './initGraphql';
import cookie from 'cookie';
import Head from 'next/head';
import { getInitialState } from 'graphql-hooks-ssr';
import { isBrowser } from './isBrowser';

function parseCookies(req?: any, options = {}) {
  return cookie.parse(
    req ? req.headers.cookie || '' : document.cookie,
    options,
  );
}

export default App => {
  return class GraphQLHooks extends React.Component {
    static displayName = 'GraphQLHooks(App)';
    static async getInitialProps(ctx) {
      const {
        Component,
        router,
        ctx: { req, res },
      } = ctx;

      //console.log(req.headers, 'HEADERS');

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const graphQLClient = initGraphQL(
        {},
        {
          getToken: () => parseCookies(req).token,
        },
      );

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {};
      }

      let graphQLState = {};
      if (!process.browser) {
        try {
          // Run all GraphQL queries
          graphQLState = await getInitialState({
            App: (
              <App
                {...appProps}
                Component={Component}
                router={router}
                graphQLClient={graphQLClient}
              />
            ),
            client: graphQLClient,
          });
        } catch (error) {
          // Prevent GraphQL hooks client errors from crashing SSR.
          // Handle them in components via the state.error prop:
          // https://github.com/nearform/graphql-hooks#usequery
          console.error('Error while running `getInitialState`', error);
        }

        // getInitialState does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      return {
        ...appProps,
        graphQLState,
      };
    }

    constructor(props) {
      super(props);
      this.graphQLClient = initGraphQL(props.graphQLState, {
        getToken: () => {
          return parseCookies().token;
        },
      });
    }

    render() {
      return <App {...this.props} graphQLClient={this.graphQLClient} />;
    }
  };
};
