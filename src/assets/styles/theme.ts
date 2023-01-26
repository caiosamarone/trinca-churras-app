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
      light: '#FB9B6D',
      dark: '#F24222',
      constrastText: colors.white,
    },
    secondary: {
      main: '#383096',
      light: '#7E78BE',
      dark: '#2C2581',
      constrastText: colors.white,
    },
    error: {
      main: '#d93025',
      light: '#ff674f',
      dark: '#9f0000',
      constrastText: colors.white,
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
      constrastText: colors.black[87],
    },
    info: {
      main: '#1976d2',
      light: '#64b5f6',
      dark: '#1976d2',
      constrastText: colors.white,
    },
    success: {
      main: '#4caf50',
      light: '#80e27e',
      dark: '#087f23',
      constrastText: colors.black[87],
    },
    background: {
      main: '#FAFAFA',
      secondary: '#F1F1F1',
      paper: colors.white,
      linearGradient: {
        blue: 'linear-gradient(251.63deg, #0066B3 0%, #383096 61.98%, #812990 100%)',
        purple: 'linear-gradient(251.63deg, #383096 0%, #812990 51.04%, #9F1880 100%)',
      },
    },
    text: {
      primary: colors.black[87],
      secondary: colors.black[54],
      disabled: colors.black[38],
      hint: colors.black[38],
    },
    common: {
      black: colors.black.main,
      black38: colors.black[38],
      black54: colors.black[54],
      white: colors.white,
      gray: colors.gray,
    },
    action: {
      active: colors.black[54],
      hover: colors.black['04'],
      selected: colors.black['08'],
      disabled: colors.black[26],
      disabledBackground: colors.black[12],
      focus: colors.black[12],
    },
    divider: colors.black[12],
    border: {
      gray: colors.black[23],
      yellow: colors.star,
    },
    white: {
      main: colors.white,
    },
    textPrimary: {
      main: colors.black[87],
    },
    textSecondary: {
      main: colors.black[54],
    },
  },
  layout: {
    border: {
      gray: `1px solid ${colors.black[23]}`,
      yellow: `1px solid ${colors.star}`,
      primary: `1px solid ${colors.primary}`,
    },
    shadow: {
      sm: `0 0 2px ${colors.black[12]}`,
      md: `0 1px 4px ${colors.black[12]}, 0 4px 8px ${colors.black[10]}, 0 6px 12px ${colors.black['08']}`,
      inset: `inset 0 -1px 0 ${colors.black[12]}`,
      card: `0 1px 4px ${colors.black[12]}, 0 4px 8px ${colors.black['08']}`,
    },
    fontSize: {
      12: '0.75rem',
      13: '0.813rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
    },
  },
  // breakpoints: {
  //   xs: '576px',
  //   sm: '768px',
  //   md: '992px',
  //   lg: '1200px',
  //   xl: '1600px'
  // }
};

export default theme;
