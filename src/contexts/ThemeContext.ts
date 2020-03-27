import { createContext } from 'react'

const ThemeContext = createContext({
  theme: '',
  toggle: () => { },
})

export default ThemeContext
