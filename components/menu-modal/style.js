import css from 'styled-jsx/css';

export const menuStyles = css`
  div {
    top: 42px;
    max-height: 80%;
    width: calc(100% - 40%);
    left: 0.5rem;
  }
  @media (max-width: 520px) {
    div {
      width: calc(100% - 1rem);
    }
  }
`;
