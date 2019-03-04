import Modal from 'react-modal';

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

const LogoutModal = ({ showModal, handleModalYes, handleModalClose }) => (
  <Modal
    isOpen={showModal}
    contentLabel="Inline Styles Modal Example"
    style={customStyles}
  >
    <div className="modal-info">
      <p>¿Estás seguro que deseas salir?</p>
      <div className="box-icon">
        <i className="icon-frown" />
      </div>
      <div className="box-buttons">
        <button type="button" onClick={handleModalYes}>
          Sí
        </button>
        <button type="button" onClick={handleModalClose}>
          No
        </button>
      </div>
    </div>
    <style jsx>
      {`
        .modal-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .modal-info p {
          text-align: center;
          font-size: 40px;
          font-weight: bold;
          color: #fff;
          padding: 10px 40px;
        }
        .box-icon {
          margin-top: 10%;
          margin-bottom: 20%;
        }
        .box-icon i {
          font-size: 140px;
          border-radius: 48px;
          padding: 8px 1px;
          color: #92481f;
        }
        .box-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 70px;
          grid-gap: 32px;
        }
        .box-buttons button {
          padding: 10px 15px;
          background: #353535;
          color: #fff;
          border: none;
          font-size: 40px;
          min-width: 111px;
          border-radius: 4px;
          font-weight: bold;
        }
        .box-buttons button:first-child {
          background: #92481f;
        }
      `}
    </style>
  </Modal>
);

Modal.setAppElement('body');

export default LogoutModal;
