import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#3381ff',
      light: '#7fa7ff', // Lighter shade of main color
      dark: '#0053cb', // Darker shade of main color
    },
    secondary: {
      main: '#FF5722',
      light: '#ff8a50', // Lighter shade of secondary color
      dark: '#c41c00', // Darker shade of secondary color
    },
    error: {
      main: '#f44336',
      light: '#ff7961', // Lighter shade of error color
      dark: '#ba000d', // Darker shade of error color
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#777777',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    // fontSize: 14,
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '1.17rem',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '0.83rem',
      fontWeight: 'bold',
    },
    h6: {
      //   fontSize: "0.67rem",
      //   fontWeight: "bold",
    },
  },
  spacing: 8, // Adjust the spacing unit as needed (8 pixels is the default)
  shape: {
    borderRadius: 4, // Adjust the border radius for components
  },
});

export default theme;
