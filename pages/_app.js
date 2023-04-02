import Head from 'next/head';
import { Footer } from '../components';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Loader = () => (
  <div className="w-full h-screen flex justify-center items-center bg-black">
    <h1 className="text-white text-lg">Loading...</h1>
  </div>
);

const MyApp = ({ Component, pageProps }) => {
  const Router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', handleRouteChange);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [Router.events]);

  return (
    <>
      <Head>
        <title>BhutanNews</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? <Loader /> : <Component {...pageProps} />}

      <Footer />
    </>
  );
};

export default MyApp;
