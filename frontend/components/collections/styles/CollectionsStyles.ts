import styled from 'styled-components';

const CollectionsStyles = styled.div`
  .grid-table {
    display: grid;
    margin: 0 auto;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
    align-items: top;
    background: rgba(250, 250, 250, 0.9);
    border-radius: 0.5rem;
  }
  @media (max-width: 800px) {
    .grid-table {
      background: transparent;
      grid-row-gap: 2rem;
      box-shadow: none;
    }
  }
  .grid-table-row {
    display: grid;
    grid-template-columns: repeat(2, 2fr) repeat(2, 1fr);
  }
  @media (max-width: 800px) {
    .grid-table-row {
      grid-template-columns: 3fr 1fr 3fr;
      background: rgba(250, 250, 250, 0.9);
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
      border-radius: 0.5rem;
    }
  }
  @media (max-width: 400px) {
    .grid-table-row {
      grid-template-columns: 1fr 1fr;
    }
  }
  .grid-table-row:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
  .grid-table-row:first-child {
    border-radius: 0.5rem 0.5rem 0 0;
    background: rgba(204, 204, 204, 0.5);
    font-weight: bold;
    text-shadow: 0 2px 1px #fff;
  }
  @media (max-width: 800px) {
    .grid-table-row:first-child {
      display: none;
    }
  }
  .grid-table-cell {
    padding: 1rem;
  }
  @media (max-width: 800px) {
    .grid-table-cell {
      padding: 0 0 1rem 0;
      text-align: center;
    }
  }
  .grid-table-cell:not(:last-child) {
    border-right: 1px solid #ddd;
  }
  @media (max-width: 800px) {
    .grid-table-cell:before {
      content: attr(data-title);
      font-weight: bold;
      display: block;
      background: rgba(221, 221, 221, 0.8);
      padding: 0.75rem;
      margin-bottom: 0.75rem;
      font-size: 1.5rem;
    }
    .grid-table-cell:first-child {
      grid-column-start: 1;
      grid-column-end: 5;
      border-bottom: 1px solid #ddd;
    }
    .grid-table-cell:first-child:before {
      border-radius: 0.5rem 0.5rem 0 0;
    }
  }
  @media (max-width: 400px) {
    .grid-table-cell:last-child {
      grid-column-start: 1;
      grid-column-end: 5;
    }
  }
`;

export default CollectionsStyles;
