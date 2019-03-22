import * as React from 'react';
import ViewServices from '../../components/service/ViewServices';
import Layout from '../../components/layout/Layout';
import Auth from '../../components/Auth';

const ServicesPage: React.FunctionComponent = () => (
  <Auth>
    <Layout title="Empezar inspección">
      <ViewServices />
    </Layout>
  </Auth>
);

export default ServicesPage;
