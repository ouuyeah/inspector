import styled from 'styled-components';

const LoginStyles = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  text-align: center;
  justify-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 40vh;
    max-width: 18rem;
    margin-top: 5vh;
    margin-right: 3rem;
    transition: all 0.4s;
  }
  h3 {
    color: #333333;
    font-size: 1.8rem;
    font-style: italic;
    line-height: 21px;
    padding: 0 3rem;
    margin-bottom: 5vh;
    margin-top: 3.5vh;
  }
  button {
    margin-top: 5vh;
  }
`;

export default LoginStyles;
