import { useEffect, useState } from 'react';
import Head from 'next/head';

import '@/styles/globals.css';

import { Footer, GradientContainer } from '@/components';

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
    <div className={isDark ? 'dark' : 'light'}>
      <div className="flex flex-col items-center justify-center p-2 min-h-screen dark:text-gray-50 text-gray-500 bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900 overflow-hidden sm:p-2 md:p-4">
        <GradientContainer>
          <Head>
            <title>Mykhaylo Ryechkin</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component isDark={isDark} {...pageProps} />
          <Footer isDark={isDark} setIsDark={setIsDark} />
        </GradientContainer>
      </div>
    </div>
  );
}

export default MyApp;
