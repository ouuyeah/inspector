import * as React from 'react';
import Collection from '../components/collections/Collection';
import Layout from '../components/layout/Layout';
import Auth from '../components/Auth';

const CollectionsPage: React.FunctionComponent = () => (
  <Auth>
    <Layout title="Colecciones">
      <Collection />
    </Layout>
  </Auth>
);

export default CollectionsPage;
