import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Link from 'next/link';

const Auth = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      const { me } = data || {};
      if (loading) return <p>Loading...</p>;
      if (!me) {
        return (
          <div>
            <p>Ups, no puedes estar aquí</p>
            <Link href="/" prefetch>
              <a>Ir al login</a>
            </Link>
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default Auth;
