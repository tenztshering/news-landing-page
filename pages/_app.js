import Head from 'next/head';
import { Footer } from '../components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>BhutanNews</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
