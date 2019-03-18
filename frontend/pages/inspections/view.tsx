import * as React from 'react';
import ViewInspections from '../../components/inspections/ViewInspections';
import Layout from '../../components/layout/Layout';
import Auth from '../../components/Auth';

const InspecitonsPage: React.FunctionComponent = () => (
  <Auth>
    <Layout title="Empezar inspección">
      <ViewInspections />
    </Layout>
  </Auth>
);

export default InspecitonsPage;
