import Head from 'next/head';
import { NextSeo } from 'next-seo';
import '../styles/globals.css';
import { Footer } from '../components';

const MyApp = ({ Component, pageProps }) => (
  <>
    <NextSeo
      title="BhutanNews"
      titleTemplate="BhutanNews"
      defaultTitle="BhutanNews"
      description="An app that brings all the media houses of Bhutan in one platform. Mainly to bring back news reading by making PDF subscription cheaper and accessible in modern way"
      canonical="https://bhutannews.vercel.app/"
      openGraph={{
        url: 'https://bhutannews.vercel.app/',
        title: 'BhutanNews',
        description:
          'An app that brings all the media houses of Bhutan in one platform. Mainly to bring back news reading by making PDF subscription cheaper and accessible in modern way',
        images: [
          {
            url: '/AppIcon.png',
            width: 800,
            height: 420,
            alt: 'BhutanNews',
          },
        ],
      }}
    />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
