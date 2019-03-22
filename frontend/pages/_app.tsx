import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import withGraphQLClient from '../lib/withGraphqlClient';
import { ClientContext } from 'graphql-hooks';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, graphQLClient, pageProps } = this.props;

    return (
      <Container>
        <ClientContext.Provider value={graphQLClient}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ClientContext.Provider>
      </Container>
    );
  }
}

export default withGraphQLClient(MyApp);
