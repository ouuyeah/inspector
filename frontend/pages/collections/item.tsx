import * as React from 'react';
import Collection from '../../components/collections/Collection';
import Layout from '../../components/layout/Layout';
import Auth from '../../components/Auth';

const CollectionPage: React.FunctionComponent = ({ query }) => (
  <Auth>
    <Layout title="Colecciones">
      <Collection id={query.id} />
    </Layout>
  </Auth>
);

export default CollectionPage;
