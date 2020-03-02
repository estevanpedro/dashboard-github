import React, { useState, useContext, createContext } from "react";
import { ThemeProvider } from 'styled-components';

const ThemeToggleContext = createContext({
   toggle: () => { }
});

export const useTheme = () => useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }: { children: any }) => {

   const [themeState, setThemeState] = useState({
      mode: 'light'
   });

   const toggle = () => {
      const mode = (themeState.mode === 'light'
         ? `dark`
         : `light`);
      setThemeState({ mode: mode });
   }

   return (
      <ThemeToggleContext.Provider value={{ toggle: toggle }}>
         <ThemeProvider theme={{ mode: themeState.mode }} >
            {children}
         </ThemeProvider>
      </ThemeToggleContext.Provider>
   );
}

export default ThemeProvider;