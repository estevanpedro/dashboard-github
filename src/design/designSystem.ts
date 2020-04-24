const common = {
  spacing: {
    lateral: '60px',
    vertical: '30px',
  },
  fontSize: {
    micro: '14px',
    verySmall: '16px;',
    small: '18px',
    regular: '20px',
    medium: '22px',
    xMedium: '24px',
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
    grey: 'rgb(242, 242, 242,0.8)',
    contrastOpacity: 'rgba(29, 29, 29, 0.1)',
    cda: '#1B83E0',
  },
  ...common,
}

const dark = {
  colors: {
    primary: '#63e4a6',
    secondary: '#5B5F97',
    background: '#262626',
    secondaryBg: '#262E33',
    contrast: '#fafafa',
    confirm: '#63e4a6',
    cancel: '#E30101',
    white: '#fafafa',
    line: 'rgba(255,255,255, 0.7)',
    header: '#1D1D1D',
    grey: 'rgb(242, 242, 242,0.1)',
    contrastOpacity: 'rgba(250, 250, 250, 0.1)',
    cda: '#1B83E0',
  },
  ...common,
}

export default {
  light,
  dark,
}
