import '$/styles/fonts.css';
import { Layout } from '$/containers/Layouts';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppContextProvider } from '../context/AppContext';

const client = new ApolloClient({
  uri: 'https://api-frontend-challenge.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AppContextProvider>
    </ApolloProvider>
  );
}
