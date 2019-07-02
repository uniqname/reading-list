import { createGlobalStyle } from "styled-components";
import select from "../utils/select.js";

export default createGlobalStyle`
  html, body {
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    color: ${select("theme.bodyText")}
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  
`;
