import * as React from 'react';
import Collections from '../../components/collections/Collections';
import Layout from '../../components/layout/Layout';
import Auth from '../../components/Auth';

const CollectionsPage: React.FunctionComponent = () => (
  <Layout title="Colecciones">
    <Collections />
  </Layout>
);

export default CollectionsPage;
