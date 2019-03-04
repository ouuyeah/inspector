import styled from 'styled-components';

const LoginButton = styled.button`
  background-color: ${props => props.theme.orange};
  border-radius: 4px;
  border: none;
  color: #fff;
  padding: 1.4rem 6rem;
  font-size: 2rem;
  margin-top: 5vh;
  transition: all 0.3s;

  &:hover {
    background-color: ${props => props.theme.orangeHover};
  }

  &[disabled] {
    opacity: 0.5;
  }
`;

export default LoginButton;
