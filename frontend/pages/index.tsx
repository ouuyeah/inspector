import * as React from 'react';
import Login from '../components/login/Login';
import { getToken } from '../lib/auth';
import redirect from '../lib/redirect';

const LoginPage: React.FunctionComponent = props => (
  <Login hasLoginToken={props.hasLoginToken} />
);

LoginPage.getInitialProps = ctx => {
  const token = Boolean(getToken(ctx));

  if (token) {
    redirect({ to: '/services/start', res: ctx.res });
  }
  return {};

  return { hasLoginToken: token };
};

export default LoginPage;
