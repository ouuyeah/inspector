import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { getToken } from '../lib/auth';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import RequestReset from '../components/RequestReset';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SignUpPage: React.FunctionComponent = props => (
  <Columns>
    <SignUp />
    <SignIn hasLoginToken={props.hasLoginToken} />
    <RequestReset />
  </Columns>
);

SignUpPage.propTypes = {
  hasLoginToken: PropTypes.bool.isRequired,
};

SignUpPage.getInitialProps = ctx => ({
  hasLoginToken: Boolean(getToken(ctx)),
});

export default SignUpPage;
