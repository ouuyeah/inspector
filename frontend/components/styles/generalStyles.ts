import { createGlobalStyle } from 'styled-components';

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
    color: ${props => props.theme.black};
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

  /*  fontello */

  @font-face {
    font-family: 'fontello';
    src: 
      url('../../static/font/fontello.ttf?25356061') format('truetype'),
      url('../../static/font/fontello.svg?25356061#fontello') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  /* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
  /* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
  /*
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    @font-face {
      font-family: 'fontello';
      src: url('../../static/font/fontello.svg?25356061#fontello') format('svg');
    }
  }
  */

  [class^='icon-']:before,
  [class*=' icon-']:before {
    font-family: 'fontello';
    font-style: normal;
    font-weight: normal;
    speak: none;

    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    margin-right: 0.2em;
    text-align: center;
    /* opacity: .8; */

    /* For safety - reset parent styles, that can break glyph codes*/
    font-variant: normal;
    text-transform: none;

    /* fix buttons height, for twitter bootstrap */
    line-height: 1em;

    /* Animation center compensation - margins should be symmetric */
    /* remove if not needed */
    margin-left: 0.2em;

    /* you can be more comfortable with increased icons size */
    /* font-size: 120%; */

    /* Font smoothing. That was taken from TWBS */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Uncomment for 3D effect */
    /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
  }

  .icon-cancel:before {
    content: '\e800';
  } /* '' */
  .icon-off:before {
    content: '\e801';
  } /* '' */
  .icon-briefcase:before {
    content: '\e802';
  } /* '' */
  .icon-camera:before {
    content: '\e803';
  } /* '' */
  .icon-edit:before {
    content: '\e804';
  } /* '' */
  .icon-down-open:before {
    content: '\f004';
  } /* '' */
  .icon-up-open:before {
    content: '\f005';
  } /* '' */
  .icon-right-open:before {
    content: '\f006';
  } /* '' */
  .icon-left-open:before {
    content: '\f007';
  } /* '' */
  .icon-menu-1:before {
    content: '\f008';
  } /* '' */
  .icon-frown:before {
    content: '\f119';
  } /* '' */
  .icon-cab:before {
    content: '\f1b9';
  } /* '' */



`;

export default GlobalStyle;
