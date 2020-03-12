import { createGlobalStyle } from 'styled-components'
import ds from './designSystem'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 'border-box';
    font-family: 'Source Sans Pro', sans-serif;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
    background-color: ${ds.colors.background};
  }
  #root {
    height: 100%;
  }
  #router-container {
    height: 100%;
  }
  button {
    background: none;
    border: none;
  }
`
