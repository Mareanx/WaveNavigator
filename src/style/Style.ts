import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  }

html, body, .App {
    height: 100%;
    width: 100%;
    background-color: #f2f3ff;
}
`;
