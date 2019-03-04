import Head from 'next/head';
import PropTypes from 'prop-types';
import LayoutHeader from './LayoutHeader';
import LayoutStyles from './styles/LayoutStyles';

const Layout = ({ title, children }) => (
  <LayoutStyles>
    <Head>
      <title>{title}</title>
    </Head>

    <LayoutHeader />
    {children}
  </LayoutStyles>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  title: 'Awesome App!',
};

export default Layout;
