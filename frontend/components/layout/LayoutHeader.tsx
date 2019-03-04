import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Modal from 'react-modal';
import LogoutModal from './LogoutModal';
import HeaderStyles from './styles/HeaderStyles';

const customStyles = {
  overlay: { backgroundColor: '#d3701f' },
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

class LayoutHeader extends React.Component {
  state = {
    showMenu: false,
    showModal: false,
  };

  handleMenuOpen = () => {
    this.setState({ showMenu: true });
  };

  handleMenuClose = () => {
    this.setState({ showMenu: false });
  };

  handleModalOpen = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
    this.setState({ showMenu: false });
  };

  handleModalYes = () => {
    Router.push('/');
  };

  render() {
    const { showMenu, showModal } = this.state;
    return (
      <HeaderStyles>
        <img src="/static/logo-sapco.png" alt="Logo Sapco" />
        <i className="icon-menu-1" onClick={this.handleMenuOpen} />
        <Modal
          isOpen={showMenu}
          contentLabel="Inline Styles Modal Example"
          style={customStyles}
        >
          <LogoutModal
            showModal={showModal}
            handleModalClose={this.handleModalClose}
            handleModalYes={this.handleModalYes}
          />
          <div className="menu-header">
            <img src="/static/logo-sapco.png" alt="Logo Sapco" />
            <i className="icon-cancel" onClick={this.handleMenuClose} />
          </div>
          <div className="menu-buttons">
            <div className="create-button">
              <Link href="/start-inspection">
                <button type="button">
                  <i className="icon-cab" /> Crear Servicio
                </button>
              </Link>
            </div>
            <div className="history-button">
              <Link href="/history">
                <button type="button">
                  <i className="icon-briefcase" /> Historial
                </button>
              </Link>
            </div>
            <div className="logout-button">
              <button type="button" onClick={this.handleModalOpen}>
                <i className="icon-off" /> Salir
              </button>
            </div>
          </div>
        </Modal>
      </HeaderStyles>
    );
  }
}

Modal.setAppElement('body');

export default LayoutHeader;
