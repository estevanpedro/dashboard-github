import theme from 'styled-theming'

export default {
  colors: {
    primary: theme('mode', {
      light: '#FF9140',
      dark: '#63e4a6',
    }),
    secondary: theme('mode', {
      light: '#5B5F97',
      dark: '#63e4a6',
    }),
    background: theme('mode', {
      light: '#E6E6E6',
      dark: '#262626',
    }),
    secondaryBg: theme('mode', {
      light: '#DBDBDB',
      dark: '#262E33',
    }),
    contrast: theme('mode', {
      light: '#1D1D1D',
      dark: '#fafafa',
    }),
    confirm: theme('mode', {
      light: '#3EC110',
      dark: '#63e4a6',
    }),
    cancel: theme('mode', {
      light: '#E30101',
      dark: '#E30101',
    }),
    white: theme('mode', {
      light: '#fafafa',
      dark: '#fafafa',
    }),
    line: theme('mode', {
      light: 'rgba(29, 29, 29, 0.1)',
      dark: 'rgba(255,255,255, 0.7)',
    }),
    header: theme('mode', {
      light: '#1D1D1D',
      dark: '#1D1D1D',
    }),
    contrastOpacity: theme('mode', {
      light: 'rgba(29, 29, 29, 0.1)',
      dark: 'rgba(250, 250, 250, 0.1)',
    }),
  },
  spacing: {
    lateral: '60px',
    vertical: '30px',
  },
  fontSize: {
    verySmall: '16px;',
    small: '18px',
    regular: '20px',
    medium: '22px',
    big: '26px',
    title: '38px',
  },
}
