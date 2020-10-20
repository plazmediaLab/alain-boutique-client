import css from 'styled-jsx/css';

export const globalStyles = css.global`
  *:focus,
  button:focus {
    outline: none;
  }
  body {
    background-image: radial-gradient(rgba(15, 15, 16, 0.15) 1px, rgba(255, 255, 255, 0) 1px),
      radial-gradient(rgba(15, 15, 16, 0.15) 1px, rgba(255, 255, 255, 0) 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: 'Rubik', sans-serif;
  }
`;

export default css`
  /* header{
    position: relative;
    background-color: red;   
  } */
  /* header > :global(img){
    width: 10rem;
  } */
  main {
    height: 85vh;
    width: 520px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 2px 6px 0px rgba(30, 27, 77, 0.19),
      0px 10px 19px 0px rgba(30, 27, 77, 0.06), 0px 10px 20px 0px rgba(30, 27, 77, 0.03);
    box-shadow: 0px 2px 6px 0px rgba(30, 27, 77, 0.19), 0px 10px 19px 0px rgba(30, 27, 77, 0.06),
      0px 10px 20px 0px rgba(30, 27, 77, 0.03);
    background: #ffffff;
  }
  @media (max-width: 520px) {
    main {
      height: 100vh;
      width: 100%;
      margin-top: 0;
      border-radius: 0;
    }
  }
  section {
    display: grid;
    height: 100vh;
    place-items: center;
  }
`;
