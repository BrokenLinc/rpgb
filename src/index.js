import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import App from './App';

const theme = createMuiTheme({
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      root: {
        height: 40,
        padding: '0 24px',
      },
    },
  },
  palette: {
    primary: {
      main: '#1a9dcd',
      contrastText: '#ffffff',
    },
  },
  shadows: ["none"],
  shape: {
    borderRadius: 0,
  },
  typography: {
    button: {
      fontFamily: [
        'Futura',
        'sans-serif',
      ].join(','),
      fontWeight: 300,
      letterSpacing: '0.05em',
    },
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
  },
});

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>
), document.getElementById('root'));
