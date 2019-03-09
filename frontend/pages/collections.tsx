import * as React from 'react';
import Collections from '../components/collections/Collections';
import Layout from '../components/layout/Layout';
import Auth from '../components/Auth';

const CollectionsPage: React.FunctionComponent = () => (
  <Auth>
    <Layout title="Colecciones">
      <Collections />
    </Layout>
  </Auth>
);

export default CollectionsPage;
