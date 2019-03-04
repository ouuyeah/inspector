import styled from 'styled-components';

const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: auto;
    height: 8vw;
  }
  i {
    font-size: 2.3rem;
    color: #d46f20;
    position: relative;
    top: -1rem;
  }
  .menu-header {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px 20px 30px;
  }

  i {
    font-size: 20px;
    color: #d46f20;
    position: relative;
    top: 4px;
    right: 3px;
  }
  .menu-buttons {
    margin-left: 10%;
    margin-top: 0;
  }
  .menu-buttons div {
    margin: 25% 0;
  }
  .menu-buttons i {
    font-size: 30px;
    color: #fff;
    position: relative;
    top: 3px;
  }
  .menu-buttons button {
    background-color: #d3701f;
    color: #fff;
    font-size: 24px;
    border: none;
    margin-left: 0;
    padding-left: 0;
    padding-right: 20%;
  }
`;

export default HeaderStyles;
