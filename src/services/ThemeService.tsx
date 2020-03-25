import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import ThemeContext from '../contexts/ThemeContext'
import designSystem from '../design/designSystem'
import GlobalStyle from '../design/GlobalStyle'

const ThemeService = ({ children }: { children: any }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const toggle = () => {
    setTheme(theme === 'light' ? `dark` : `light`)
  }

  return (
    <ThemeContext.Provider value={{ toggle }}>
      <ThemeProvider theme={designSystem[theme]}>
        <GlobalStyle lightMode={theme === 'light'} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeService
