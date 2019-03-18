import * as React from 'react';
import StartService from '../../components/services/StartService';
import Layout from '../../components/layout/Layout';
import Auth from '../../components/Auth';

const StartServicePage: React.FunctionComponent = () => (
  <Auth>
    <Layout title="Empezar inspección">
      <StartService />
    </Layout>
  </Auth>
);

export default StartServicePage;
