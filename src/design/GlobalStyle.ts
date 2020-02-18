import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 'border-box';
    font-family: 'Source Sans Pro', sans-serif;
  }
  html {
    height: 100%;
    body {
      height: 100%;
      #root {
        height: 100%;
      }
    }
  }
  button {
    background: none;
    border: none;
  }
`
