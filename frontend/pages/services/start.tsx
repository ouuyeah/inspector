import * as React from 'react';
import StartService from '../../components/services/StartService';
import Layout from '../../components/layout/Layout';
import Auth from '../../components/Auth';

const StartServicePage: React.FunctionComponent<Props> = ({ query }) => (
  <Auth>
    <Layout title="Empezar inspección">
      <StartService id={query.id} />
    </Layout>
  </Auth>
);

interface Props {
  query: { id: string };
}

export default StartServicePage;
