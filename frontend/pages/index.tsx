import * as React from 'react';
import Login from '../components/login/Login';
import { getToken } from '../lib/auth';
import Router from 'next/router';

const LoginPage: React.FunctionComponent = props => (
  <Login hasLoginToken={props.hasLoginToken} />
);

LoginPage.getInitialProps = ctx => {
  const token = Boolean(getToken(ctx));

  if (token) {
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/start-inspection',
      });
      ctx.res.end();
    } else {
      Router.push('/start-inspection');
    }
  }

  return { hasLoginToken: token };
};

export default LoginPage;
