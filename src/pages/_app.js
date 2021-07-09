import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';
import '@/styles/prism.css';

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setIsDark(true);
      }
      window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
        setIsDark(true);
      });
    }
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableSystem={false}
      forcedTheme={Component.theme || undefined}
    >
      <div className={isDark ? 'dark' : 'light'}>
        <Head>
          <title>Mykhaylo Ryechkin</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="dark:text-gray-50 text-gray-500 selection:bg-cyan-100 bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900">
          <Component isDark={isDark} setIsDark={setIsDark} {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
