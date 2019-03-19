import styled from 'styled-components';

const ButtonLink = styled.a`
  background: ${props => props.theme.orange};
  color: #fff;
  display: inline-block;
  padding: 0.3rem 2rem;
  border-radius: 3px;

  &:hover {
    background-color: ${props => props.theme.orangeHover};
  }

  &[disabled] {
    opacity: 0.5;
  }
`;

export default ButtonLink;
