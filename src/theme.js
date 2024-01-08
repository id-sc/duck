import { createTheme } from "@mui/material";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=GFS+Neohellenic&display=swap');

  body {
    font-family: 'GFS Neohellenic', sans-serif;
    /* Other global styles can be added here */
  }
`;

export const theme = createTheme({
  palette: {
    background: {
      main: "#F5F5F5",
    },
    primary: {
      main: "#020711",
    },
    secondary: {
      main: "#FFE0B2",
    },
    cupcake: {
      main: "#4CAF50",
    },
    button: {
      main: '#000000',
    },
    hoverShade: '#F5F5F5',
  },
  typography: {
    fontFamily: 'GFS Neohellenic, sans-serif',
    h1: {
      fontSize: '5rem',
      fontWeight: 500,
      color: '#FFFFFF',
      textAlign: 'center',
      lineHeight: 1.5, // Line height set to at least 1.5 times the font size
      letterSpacing: '0.1em', // Letter spacing set to at least 0.12 times the font size
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: '#020711',
      textAlign: 'center',
      lineHeight: 1.5,
      letterSpacing: '0.05em',
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: 400,
      color: '#FFFFFF',
      textAlign: 'center',
      lineHeight: 1.5,
      letterSpacing: '0.02em',
    },
    h4: {
      fontSize: '1.7rem',
      fontWeight: 500,
      color: '#020711',
      textAlign: 'center',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    h5: {
      fontSize: '1.3rem',
      fontWeight: 500,
      color: '#FFFFFF',
      textAlign: 'center',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize: '2.4rem',
      lineHeight: 1.5,
      color: '#333333',
      textAlign: 'justify',
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '1.6rem',
      lineHeight: 1.5,
      color: '#333333',
      textAlign: 'justify',
      letterSpacing: '0.01em',
    },
    body3: {
      fontSize: '1.4rem',
      lineHeight: 1.5,
      color: '#333333',
      textAlign: 'justify',
      letterSpacing: '0.01em',
    },
    subtitle1: {
      fontSize: '1.2rem',
      lineHeight: 1.5,
      color: '#FFFFFF',
      textAlign: 'center',
      letterSpacing: '0.01em',
    },
    subtitle2: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#FFFFFF',
      textAlign: 'center',
      letterSpacing: '0.01em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: 'none',
          backgroundColor: '#F5F5F5',
          borderRadius: 55,
          color: '#020711',
          fontSize: '1.2rem',
          '&:hover': {
            backgroundColor: 'rgba(2, 7, 17, 1)',
            color: '#F5F5F5',
            transition: 'filter 0.3s',
          },
        },
        outlined: {
          textTransform: 'none',
          fontSize: '1.2rem',
          borderRadius: 55,
          color: '#020711',
          '&:hover': {
            backgroundColor: 'rgba(2, 7, 17, 1)',
            color: '#F5F5F5',
            transition: 'filter 0.3s',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#020711',
          textDecoration: 'none',
          '&:hover': {
            backgroundColor: 'rgba(2, 7, 17, 1)',
          },
        },
      },
    },
  },
});
