import styled from 'styled-components';

const CollectionsStyles = styled.div`
  .titles {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;

    a {
      background: #d3701f;
      color: #fff;
      display: inline-block;
      padding: 0.3rem 2rem;
      border-radius: 3px;
    }
  }
  .edit {
    background-color: ${props => props.theme.orange};
    color: #fff;
  }
  .wrapper-list {
    margin-top: 1rem;
  }
  .list {
    padding: 0.7rem 1.2rem;
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

export default CollectionsStyles;
