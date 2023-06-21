import { Provider as ReduxProvider } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { Layout } from 'components/Layout';
import { AppProps } from 'next/app';
import { store } from 'store';
import defaultTheme from 'theme/defaultTheme';
import { GlobalStyles } from 'theme/Globalstyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <GlobalStyles />
    </ReduxProvider>
  );
}

MyApp.displayName = 'app';

export default MyApp;
