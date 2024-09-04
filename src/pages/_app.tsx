import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/globalStyles';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Strayhome</title>
      </Head>
      {/* Envolve toda a aplicação com ThemeProvider, se aplicável */}
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
