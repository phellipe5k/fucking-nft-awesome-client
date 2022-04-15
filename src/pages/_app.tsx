import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

const myApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link
          rel="shortcut icon"
          href="https://reactavancado.com.br/img/icon-512.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://reactavancado.com.br/img/icon-512.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default myApp;
