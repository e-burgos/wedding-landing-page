import { createTheme } from '@material-ui/core/styles';

const ThemeConfig = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: ['HeadingFont', 'HeadingFontBold', 'TitleFont', "'Open Sans'", "'Roboto'", 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#205BB9',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ED7119',
      contrastText: '#ffffff',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'unset',
      },
      label: {
        fontSize: 16,
        '@media (min-width:960px)': {
          fontSize: 18,
        },
      },
      contained: {
        color: '#2D3841',
        backgroundColor: '#F7F7F7',
        fontWeight: 700,
      },
    },
    MuiInputBase: {
      root: {
        fontSize: 16,
        '@media (min-width:960px)': {
          fontSize: 18,
        },
      },
    },
    MuiInputLabel: {
      root: {
        fontWeight: 'bold',
        color: '#2D3841',
        marginBottom: 8,
      },
    },
  },
});

export default ThemeConfig;
