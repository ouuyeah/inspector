import React from 'react';
import Meta from './Meta';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  red: '#FF0000',
  orange: '#d3701f',
  orangeHover: '#ff8f34',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Arial';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  h1,h2,h3,h4 {
    font-weight: normal;
    margin: 0;
  }
  button {
    cursor: pointer;
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #404040;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: #404040;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: #404040;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: #404040;
  }

`;

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          <Inner>{this.props.children}</Inner>
          <GlobalStyle />
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
