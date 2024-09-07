import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/globalStyles';
import Head from 'next/head';
import { Poppins } from '@next/font/google';
import { AuthProvider } from '@/contexts/authContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] // Todos os pesos disponíveis
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jaiminho</title>
      </Head>
      <AuthProvider>
        <div className={poppins.className}>
          <GlobalStyles />
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </>
  );
}
