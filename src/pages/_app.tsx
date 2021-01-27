import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Its only pizza" key="title" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
