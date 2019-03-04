import styled from 'styled-components';

const FormStyles = styled.form`
  text-align: center;
  display: grid;
  grid-template-rows: auto auto;
  height: calc(100vh - 10vh);

  h3 {
    font-size: 2.2rem;
    color: #d46f20;
  }

  input {
    width: 100%;
  }
  button {
    align-self: end;
    margin-bottom: 2vh;
  }
`;

export default FormStyles;
