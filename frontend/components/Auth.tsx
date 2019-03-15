import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';

import AuthStyles from './styles/AuthStyles';
import Login from './login/Login';
import Loading from './Loading';

const Auth = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      const { me } = data || {};
      if (loading) return <Loading />;
      if (!me) {
        return (
          <AuthStyles>
            <p>Ups, no puedes estar aquí</p>
            <Login />
          </AuthStyles>
        );
      }
      return props.children;
    }}
  </Query>
);

export default Auth;
