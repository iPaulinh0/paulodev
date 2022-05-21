import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&family=Roboto:wght@400;500;700;800&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', 'Roboto', sans-serif;
  }
`;