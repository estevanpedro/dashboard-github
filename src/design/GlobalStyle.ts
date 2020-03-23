import { createGlobalStyle } from 'styled-components'
import ds from './designSystem'

export default createGlobalStyle<GlobalStyleProps>`
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
    background-color: ${props =>
      props.lightMode ? ds.light.colors.background : ds.dark.colors.background};
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

interface GlobalStyleProps {
  lightMode: boolean
}
