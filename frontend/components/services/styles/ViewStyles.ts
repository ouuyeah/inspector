import styled from 'styled-components';

const ViewStyles = styled.div`
  .titles {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    justify-content: space-between;

    h3 {
      margin-right: 1rem;
    }
  }

  /* STATE STYLES  */
  .info-FINALIZED {
    background-color: #e9ffed;
    .rc-collapse-header {
      border: 1px solid #22981c;
    }
  }
  .info-PROCESS {
    background-color: #f2ff91;
    .rc-collapse-header {
      border: 1px solid #c6da2e;
    }
  }
  .info-CANCELED {
    background-color: #cecece;
    .rc-collapse-header {
      border: 1px solid #797979;
    }
  }
  .info-FAILED {
    background-color: #ffc1c1;
    .rc-collapse-header {
      border: 1px solid #ff6020;
    }
  }

  /* END STATE STYLES  */

  /* COLLAPSE STYLES  */
  .rc-collapse {
    border: none;
  }
  .rc-collapse-content {
    padding: 0;
  }
  .rc-collapse > .rc-collapse-item {
    margin-bottom: 1rem;
    border: none;
  }
  .rc-collapse-content > .rc-collapse-content-box {
    margin: 0;
  }
  .rc-collapse > .rc-collapse-item > .rc-collapse-header {
    outline: none;
    color: #222;
  }
  /* END COLLAPSE STYLES  */

  .edit {
    background-color: ${props => props.theme.orange};
    color: #fff;
  }
  .wrapper-list {
    margin-top: 1rem;
  }
  .list {
    padding: 1.7rem 1.2rem;
    line-height: 1.8rem;
    background: #ececec;
    display: grid;
    grid-template-columns: 10fr 1fr;
    align-items: center;

    p {
      margin: 0;
    }
  }
  .user {
    font-size: 1.2rem;
  }

  .type {
    float: right;
  }
  .arrow-right {
    border-right: 2px solid ${props => props.theme.orange};
    border-bottom: 2px solid ${props => props.theme.orange};
  }
`;

export default ViewStyles;
