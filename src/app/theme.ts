import { DefaultTheme } from 'styled-components';

const shutsTheme: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    primary: {
      main: '#22C805',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
  },
  breakPoints: {
    // xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '922px', 
    // xl: '1920px',
  }
};
export default shutsTheme;
