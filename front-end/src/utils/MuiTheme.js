import { createTheme } from '@mui/material/styles';
import jua from '../assets/fonts/Jua-Regular.ttf'

const Interlude = createTheme({
    palette: {
        primary: {
            main: "#5600e3"
        }
    },
    typography: {
        fontFamily: "'jua', '-apple-system','Segoe UI','Roboto','Helvetica Neue', 'Arial','sans-serif'",
    },
  components: {
    MuiButton: {
      // Make the default border radius 12px
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'jua';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Raleway'), local('Raleway-Regular'), url(${jua}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
})

export default Interlude