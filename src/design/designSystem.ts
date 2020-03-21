const common = {
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

const light = {
  colors: {
    primary: '#FF9140',
    secondary: '#5B5F97',
    background: '#E6E6E6',
    secondaryBg: '#DBDBDB',
    contrast: '#1D1D1D',
    confirm: '#3EC110',
    cancel: '#E30101',
    white: '#fafafa',
    line: 'rgba(29, 29, 29, 0.1)',
    header: '#1D1D1D',
  },
  ...common,
}

const dark = {
  colors: {
    primary: '#63e4a6',
    secondary: '#63e4a6',
    background: '#262626',
    secondaryBg: '#262E33',
    contrast: '#fafafa',
    confirm: '#63e4a6',
    cancel: '#E30101',
    white: '#fafafa',
    line: 'rgba(255,255,255, 0.7)',
    header: '#1D1D1D',
  },
  ...common,
}

export default {
  light,
  dark,
}
