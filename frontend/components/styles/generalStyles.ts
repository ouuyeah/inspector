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
    line-height: 2rem;
  }
  button {
    cursor: pointer;
  }

  .hide-xs {
    display: none;
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

  .arrow-right {
    display: inline-block;
    width: 10px; height: 10px;
    transform: rotate(-45deg);
  }

  /* RC COLLAPSE STYLES */
  .rc-collapse {
    background-color: #f7f7f7;
    border-radius: 3px;
    border: 1px solid #d9d9d9;
  }
  .rc-collapse-anim-active {
    transition: height 0.2s ease-out;
  }
  .rc-collapse > .rc-collapse-item {
    border-top: 1px solid #d9d9d9;
  }
  .rc-collapse > .rc-collapse-item:first-child {
    border-top: none;
  }
  .rc-collapse > .rc-collapse-item > .rc-collapse-header {
    display: flex;
    align-items: center;
    line-height: 22px;
    padding: 10px 16px;
    color: #666;
    cursor: pointer;
  }
  .rc-collapse > .rc-collapse-item > .rc-collapse-header .arrow {
    display: inline-block;
    content: '';
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-left: 4px solid #666666;
    vertical-align: middle;
    margin-right: 8px;
  }
  .rc-collapse > .rc-collapse-item > .rc-collapse-header .rc-collapse-extra {
    margin: 0 16px 0 auto;
  }
  .rc-collapse > .rc-collapse-item-disabled > .rc-collapse-header {
    cursor: not-allowed;
    color: #999;
    background-color: #f3f3f3;
  }
  .rc-collapse-content {
    overflow: hidden;
    color: #666666;
    padding: 0 16px;
    background-color: #fff;
  }
  .rc-collapse-content > .rc-collapse-content-box {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .rc-collapse-content-inactive {
    display: none;
  }
  .rc-collapse-item:last-child > .rc-collapse-content {
    border-radius: 0 0 3px 3px;
  }
  .rc-collapse > .rc-collapse-item-active > .rc-collapse-header .arrow {
    position: relative;
    top: 2px;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 4px solid #666666;
    margin-right: 6px;
  }


    /* RC SWIPEOUT STYLES */
  .rc-swipeout {
    overflow: hidden;
    position: relative;
    touch-action: none;
  }
  .rc-swipeout-content {
    position: relative;
    background-color: #fff;
  }
  .rc-swipeout-cover {
    position: absolute;
    z-index: 2;
    background: transparent;
    height: 100%;
    width: 100%;
    top: 0;
    display: none;
  }
  .rc-swipeout .rc-swipeout-content,
  .rc-swipeout .rc-swipeout-actions {
    -webkit-transition: all 250ms;
    transition: all 250ms;
  }
  .rc-swipeout-swiping .rc-swipeout-content {
    -webkit-transition: none;
    transition: none;
  }
  .rc-swipeout-actions {
    position: absolute;
    top: 0;
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    white-space: nowrap;
  }
  .rc-swipeout-actions-left {
    left: 0;
  }
  .rc-swipeout-actions-right {
    right: 0;
  }
  .rc-swipeout-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .rc-swipeout-btn-text {
    padding: 0 12px;
  }


`;

export default GlobalStyle;
