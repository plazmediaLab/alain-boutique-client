import css from 'styled-jsx/css';

export const globalStyles = css.global`
  *:focus {
    outline: none
  }
  body {
    background-image:
        radial-gradient(rgba(15, 15, 16, .15) 1px, rgba(255,255,255,0) 1px),
        radial-gradient(rgba(15, 15, 16, .15) 1px, rgba(255,255,255,0) 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    color: #0F0F10;
    font-family: 'Rubik', sans-serif;
  }
`;
  
export default css`
  /* header{
    position: relative;
    background-color: red;   
  } */
  /* header > :gloval(img){
    width: 10rem;
  } */
  main {
    height: 85vh;
    width: 520px;
    overflow: hidden;
    -webkit-box-shadow: 0px 9px 25px -5px rgba(0,0,0,0.2), 0px 5px 6px -10px rgba(0,0,0,0.12); 
    box-shadow: 0px 9px 25px -5px rgba(0,0,0,0.2), 0px 5px 6px -10px rgba(0,0,0,0.12);
    background: #FFFFFF;
    border-radius: 10px;
  }
  @media (max-width: 520px) {
    main {
      height: 100vh;
      width: 100%;
      margin-top: 0;
    }
  }
  section {
    display: grid;
    height: 100vh;
    place-items: center;
  }
`;