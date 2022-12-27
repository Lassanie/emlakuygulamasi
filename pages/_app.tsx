import Router from 'next/router';
import Head from 'next/head';
import { Progress } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
<>
<Head>
<ChakraProvider>
  <Layout>
    <Component {...pageProps} />
  </Layout>
</ChakraProvider>
</Head>
</>
  ) 
}

export default App;

