import { useState } from 'react';
import Head from 'next/head';
import { FiSun } from 'react-icons/fi';
import { IoMoon } from 'react-icons/io5';
import '@/styles/globals.css';

import { Footer, IconToggle } from '@/components';

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="flex flex-col items-center justify-center p-4 min-h-screen dark:text-gray-50 text-gray-500 bg-gradient-to-r from-gray-100 dark:from-gray-900 dark:to-gray-700 to-white">
        <Head>
          <title>Mykhaylo Ryechkin</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <div className="mt-12">
          <IconToggle
            enabled={isDark}
            setEnabled={setIsDark}
            OffIcon={FiSun}
            OnIcon={IoMoon}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
