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
      <div className="md:dark:via-pink-900 md:dark:to-indigo-900 flex flex-col items-center justify-center p-2 min-h-screen dark:text-gray-50 text-gray-500 bg-gradient-to-r dark:from-blue-900 from-yellow-100 to-blue-100 dark:to-pink-900 via-pink-100 sm:p-2 md:p-4">
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
