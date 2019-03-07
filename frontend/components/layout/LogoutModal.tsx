import Modal from 'react-modal';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import LogoutModalStyles from './styles/LogoutModalStyles';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const customStyles = {
  overlay: { backgroundColor: '#d3701f', zIndex: '9999' },
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    position: 'fixed',
    overflow: 'auto',
    width: '100%',
    height: '100%',
    background: '#d3701f',
    padding: '0',
    border: 'none',
  },
};

const LogoutModal = ({ showModal, handleModalYes, handleModalClose }) => (
  <Modal
    isOpen={showModal}
    contentLabel="Inline Styles Modal Example"
    style={customStyles}
  >
    <LogoutModalStyles>
      <p>¿Estás seguro que deseas salir?</p>

      <i className="icon-frown" />

      <div className="box-buttons">
        <Mutation
          mutation={SIGN_OUT_MUTATION}
          onCompleted={() => Router.push('/')}
        >
          {signout => <button onClick={signout}>Sí</button>}
        </Mutation>
        <button type="button" onClick={handleModalClose}>
          No
        </button>
      </div>
    </LogoutModalStyles>
  </Modal>
);

Modal.setAppElement('body');

export default LogoutModal;
