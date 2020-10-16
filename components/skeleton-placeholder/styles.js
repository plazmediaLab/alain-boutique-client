import css from 'styled-jsx/css';

export default css`
  section > div:first-child,
  section > div:last-child {
    min-height: 56px;
  }

  div.header {
    grid-template-columns: auto 1fr auto;
  }
`;
