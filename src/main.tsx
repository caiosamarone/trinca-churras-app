import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import GlobalStyles from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
