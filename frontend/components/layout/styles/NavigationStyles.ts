import styled from 'styled-components';

const NavigationStyles = styled.div`
  .navigation__checkbox {
    display: none;
  }

  .navigation__button {
    background-color: #fff;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 6rem;
    right: 6rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem ${props => props.theme.shadowDark};
    text-align: center;
    cursor: pointer;

    @media (max-width: 900px) {
      top: 4rem;
      right: 4rem;
    }

    @media (max-width: 600px) {
      top: 3rem;
      right: 3rem;
    }
  }
  .navigation__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background-image: radial-gradient(
      ${props => props.theme.orange},
      ${props => props.theme.orange2}
    );
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

    @media (max-width: 900px) {
      top: 4.5rem;
      right: 4.5rem;
    }

    @media (max-width: 600px) {
      top: 3.5rem;
      right: 3.5rem;
    }
  }

  .navigation__nav {
    display: none;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;

    opacity: 0;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .navigation__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    width: 100%;
  }

  .navigation__item {
    margin: 1rem;
  }

  .navigation__link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #fff 50%
      );
      background-size: 220%;
      transition: all 0.4s;

      span {
        margin-right: 1.5rem;
        display: inline-block;
      }
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: ${props => props.theme.orange};
      transform: translateX(1rem);
    }
  }

  //FUNCTIONALITY
  .navigation__checkbox:checked ~ .navigation__background {
    transform: scale(80);
  }

  .navigation__checkbox:checked ~ .navigation__nav {
    opacity: 1;
    display: block;
    width: 100%;
  }
  .navigation__icon {
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: ${props => props.theme.greyDark};
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }

  //ICON

  .navigation__button:hover .navigation__icon::before {
    top: -1rem;
  }

  .navigation__button:hover .navigation__icon::after {
    top: 1rem;
  }

  .navigation__checkbox:checked + .navigation__button .navigation__icon {
    background-color: transparent;
  }

  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon::before {
    top: 0;
    transform: rotate(135deg);
  }

  .navigation__checkbox:checked + .navigation__button .navigation__icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
`;
export default NavigationStyles;
