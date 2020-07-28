import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
