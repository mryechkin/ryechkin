import { useState } from 'react';
import Head from 'next/head';
import { FiSun } from 'react-icons/fi';
import { IoMoon } from 'react-icons/io5';
import '@/styles/globals.css';

import { Footer } from '@/components';

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="flex flex-col items-center justify-center p-2 min-h-screen dark:text-gray-50 text-gray-500 bg-gradient-to-br from-gray-50 dark:from-gray-700 to-gray-200 dark:to-gray-900 overflow-hidden sm:p-2 md:p-4">
        <Head>
          <title>Mykhaylo Ryechkin</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <div className="mt-12">
          <button
            className="p-2 text-xl transform hover:scale-125 sm:text-3xl"
            onClick={() => setIsDark(!isDark)}
          >
            {!isDark && (
              <FiSun
                className="w-8 h-8 text-gray-600 hover:text-gray-900"
                aria-hidden="true"
              />
            )}
            {isDark && (
              <IoMoon
                className="w-8 h-8 hover:text-indigo-500 text-indigo-700"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
