import sc, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// Needed for intellisense
const styled = { createGlobalStyle, ...sc };

const GlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: "Ubuntu";
    src: url("/fonts/Ubuntu-Bold.ttf") format("truetype");
    font-weight: 800;
    font-style: bold;
    font-display: auto;
  }

  ${reset}

  html,
  body {
    color: whitesmoke;
    padding: 0;
    margin: 0;
    font-family: Baskerville, Baskerville Old Face, Hoefler Text, Garamond,
    Times New Roman, serif;
    background: #000000;
    font-size: 1.2rem;
    font-weight: 400;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
