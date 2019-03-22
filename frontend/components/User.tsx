import { useQuery } from 'graphql-hooks';
import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = `
  query {
    me {
      id
      email
      name
      nickname
      cc
      permissions
    }
  }
`;

const User = props => {
  const { loading, data } = useQuery(CURRENT_USER_QUERY);

  if (loading) return <div>Loading</div>;

  return <div {...props}>{props.children}</div>;
};

User.propTypes = {
  children: PropTypes.object.isRequired,
};

export default User;
export { CURRENT_USER_QUERY };
