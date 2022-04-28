import type { AppProps } from "next/app";
import Head from "next/head";

import ThemeProvider from "contexts/ThemeContext";

import MainLayout from "layouts/MainLayout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Só piada boa</title>
      </Head>

      <ThemeProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
