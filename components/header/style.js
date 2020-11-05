import css from 'styled-jsx/css';

export default css`
  header {
    -webkit-box-shadow: 0px 2px 4px 0px rgba(30, 27, 77, 0.13);
    box-shadow: 0px 2px 4px 0px rgba(30, 27, 77, 0.13);
    background: rgba(255, 255, 255, 0.7); /* Make sure this color has an opacity of less than 1 */
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
  header.ffx {
    background: rgba(
      255,
      255,
      255,
      0.93
    ) !important; /* Make sure this color has an opacity of less than 1 */
  }
`;
