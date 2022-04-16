import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

const myApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Fucking NFT Awesome</title>
        
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default myApp;
