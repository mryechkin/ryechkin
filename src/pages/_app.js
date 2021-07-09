import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider, useTheme } from 'next-themes';

import '@/styles/globals.css';
import '@/styles/prism.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableSystem={false}
      forcedTheme={Component.theme || undefined}
    >
      <Head>
        <title>Mykhaylo Ryechkin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:text-gray-50 text-gray-500 selection:bg-cyan-100 bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
