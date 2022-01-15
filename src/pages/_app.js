import '../styles/globals.css';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

const AppLayout = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title key="title">Profit sells in Solana</title>
        <link rel="shortcut icon" href="/svg/logo.svg" sizes="any" type="image/svg+xml" ></link>
      </Head>
      <div>
        <Toaster />
      </div>
      <main className="flex justify-center items-center h-screen w-screen bg-slate-800">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default AppLayout;
