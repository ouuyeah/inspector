import { useQuery } from 'graphql-hooks';
import { CURRENT_USER_QUERY } from './User';

import AuthStyles from './styles/AuthStyles';
import Login from './login/Login';
import Loading from './Loading';

const Auth = props => {
  const { loading, data } = useQuery(CURRENT_USER_QUERY);
  console.log(data, 'Data');
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
};

export default Auth;
