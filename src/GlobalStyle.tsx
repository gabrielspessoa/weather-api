import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    font-family: 'Poppins', system-ui, sans-serif;
  }

  #root {
    overflow: auto;
    height: 100%;
  }

  #root::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: auto;
    background: url('/assets/images/background.jpg') center/cover repeat;
    filter: brightness(0.6);
    z-index: -10;
  }
`;
