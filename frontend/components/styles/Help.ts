import styled from 'styled-components';

const Help = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.orange};
  padding: 0px 4px;
  border: 2px solid;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  left: 2px;
`;

export default Help;
