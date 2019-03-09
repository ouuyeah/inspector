import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Modal from 'react-modal';
import LogoutModal from './LogoutModal';
import HeaderStyles from './styles/HeaderStyles';
import NavigationStyles from './styles/NavigationStyles';

class LayoutHeader extends React.Component {
  state = {
    showModal: false,
  };

  handleModalOpen = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  handleModalYes = () => {
    Router.push('/');
  };

  render() {
    const { showModal } = this.state;
    return (
      <HeaderStyles>
        <img src="/static/logo-sapco.png" alt="Logo Sapco" />
        {/*<span style={{ color: 'red', fontSize: '3rem', fontWeight: 'bold' }}>
          SexCito
        </span>*/}
        <LogoutModal
          showModal={showModal}
          handleModalClose={this.handleModalClose}
          handleModalYes={this.handleModalYes}
        />
        <NavigationStyles>
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />

          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link href="/start-inspection">
                  <a className="navigation__link">Crear Servicio</a>
                </Link>
              </li>
              <li className="navigation__item">
                <Link href="/historial">
                  <a className="navigation__link">Ver servicios</a>
                </Link>
              </li>
              <li className="navigation__item">
                <a
                  href="#"
                  onClick={this.handleModalOpen}
                  className="navigation__link"
                >
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </nav>
        </NavigationStyles>
      </HeaderStyles>
    );
  }
}

Modal.setAppElement('body');

export default LayoutHeader;
