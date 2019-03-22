import * as React from 'react';
import StartService from '../../components/service/StartService';
import Layout from '../../components/layout/Layout';
import Auth from '../../components/Auth';

const StartServicePage: React.FunctionComponent<Props> = ({ query }) => (
  <Auth>
    <Layout title="Primera descripción">
      <StartService id={query.id} />
    </Layout>
  </Auth>
);

interface Props {
  query: { id: string };
}

export default StartServicePage;
