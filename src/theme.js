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
  },
  typography: {
    fontFamily: 'GFS Neohellenic, sans-serif', //TODO Change font
    h1: {
      fontSize: '5rem',
      fontWeight: 500,
      color: '#123456', //TODO Color does not change but font does
      textAlign: 'center',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: '#020711',
      textAlign: 'center',
    },
    h3: {
        fontSize: '1.3rem',
        fontWeight: 400,
        color: '#FFFFFF',
        textAlign: 'center',
      },
    h4: {
        fontSize: '1.4rem',
        fontWeight: 500,
        color: '#020711', //'#55AAAA',
        textAlign: 'center',
      },
    h5: {
        fontSize: '1.3rem',
        fontWeight: 500,
        color: '#FFFFFF',
        textAlign: 'center',
      },
    body1: {
      fontSize: '2rem',
      lineHeight: 1.5,
      color: '#333333',
      textAlign: 'justify',
    },
    body2: {
        fontSize: '1.2rem',
        lineHeight: 1.5,
        color: '#333333',
        textAlign: 'justify',
      },
    body3: {
        fontSize: '1.2rem',
        lineHeight: 1.5,
        color: '#333333',
        textAlign: 'justify',
      },
    subtitle1: {
        fontSize: '1rem',
        lineHeight: 1.5,
        color: '#FFFFFF',
        textAlign: 'center',
      },
    subtitle2: {
        fontSize: '.8rem',
        lineHeight: 1.5,
        color: '#FFFFFF',
        textAlign: 'center',
      },
  },
  components: {
    MuiButton: {
        styleOverrides: {
          contained: {
            textTransform: 'none', // Prevent uppercase in button text
            backgroundColor: '#F5F5F5',
            borderRadius: 55,
            color: '#020711',
            '&:hover': {
              backgroundColor: 'rgba(2, 7, 17, 1)', // Darker shade on hover
              color: '#F5F5F5',
            },
          },
          outlined: {
            textTransform: 'none', // Prevent uppercase in button text
            fontSize: '1.1rem',
            borderRadius: 55,
            color: '#020711',
            '&:hover': {
              backgroundColor: 'rgba(2, 7, 17, 1)', // black on hover
              color: '#F5F5F5',
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: '#123456', // Default link color
            textDecoration: 'none',
            '&:hover': {
              color: '#388E3C', // Darker shade on hover
            },
          },
        },
      },
    },
  });