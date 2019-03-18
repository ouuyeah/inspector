import * as React from 'react';
import ViewServices from '../../components/services/ViewServices';
import Layout from '../../components/layout/Layout';
import Auth from '../../components/Auth';

const ServicesPage: React.FunctionComponent = () => (
  <Layout title="Empezar inspección">
    <ViewServices />
  </Layout>
);

export default ServicesPage;
