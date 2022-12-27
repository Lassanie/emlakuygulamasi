import Head from "next/head";
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';
import SearchFilters from "./SearchFilters";



export default function Layout({ children }) {
    return (
      <html lang="en">
      <>
        <Head>
          <title>Emlak</title>
          
        </Head>
        <header>
            <Navbar />
          </header>
        <Box maxWidth='1280px' m='auto'>
          <body>
            {children}
            </body>
          <footer>
            <Footer />
          </footer>
        </Box>
      </>
      </html>
    );
  }