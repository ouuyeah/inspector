import * as React from 'react';
import StartInspection from '../../components/inspections/StartInspection';
import Layout from '../../components/layout/Layout';
import Auth from '../../components/Auth';

const StartInspectionPage: React.FunctionComponent = () => (
  <Auth>
    <Layout title="Empezar inspección">
      <StartInspection />
    </Layout>
  </Auth>
);

export default StartInspectionPage;
