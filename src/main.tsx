import ReactDOM from 'react-dom/client';
import App from 'App';
import GlobalStyles from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import { GlobalProvider } from 'contexts/GlobalContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </ThemeProvider>,
);
