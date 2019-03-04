import styled from 'styled-components';

const ButtonPrimary = styled.button`
  background-color: ${props => props.theme.orange};
  border-radius: 4px;
  border: none;
  color: #fff;
  padding: 1.4rem 6rem;
  font-size: 2rem;
  transition: all 0.3s;
  width: ${props => (props.login ? 'auto' : '100%')};

  &:hover {
    background-color: ${props => props.theme.orangeHover};
  }

  &[disabled] {
    opacity: 0.5;
  }
`;

export default ButtonPrimary;
