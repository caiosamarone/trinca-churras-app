const colors = {
  black: {
    main: '#000',
    '04': 'rgba(0,0,0,0.04)',
    '08': 'rgba(0,0,0,0.08)',
    '10': 'rgba(0,0,0,0.1)',
    '12': 'rgba(0,0,0,0.12)',
    '23': 'rgba(0,0,0,0.26)',
    '26': 'rgba(0,0,0,0.26)',
    '38': 'rgba(0,0,0,0.38)',
    '54': 'rgba(0,0,0,0.54)',
    '87': 'rgba(0,0,0,0.87)',
  },
  white: '#fff',
  star: '#ffb400',
  primary: '#F26522',
  gray: '#e0e0e0',
};

const theme = {
  palette: {
    primary: {
      main: '#FFD836',
    },
    secondary: {
      main: '#383096',
    },
    error: {
      main: '#d93025',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#1976d2',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      main: '#FAFAFA',
      secondary: 'F1F1F1',
    },
    text: {
      primary: colors.black.main,
      secondary: colors.black[54],
      disabled: colors.black[38],
      hint: colors.black[38],
      white: '#FFF',
    },
  },
};

export default theme;
