import styled from 'styled-components';

const LogoutModalStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  p {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
    padding: 5vh 6vh;
    margin: 0;
    line-height: 3.5rem;
  }

  i {
    color: #92481f;
    font-size: 15rem;
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
`;

export default LogoutModalStyles;
