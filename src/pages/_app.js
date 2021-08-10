/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/no-extraneous-dependencies */
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider, useTheme } from 'next-themes';

import { MDX } from '@/components';

import SEO from '../../next-seo.config';

import '@/styles/globals.css';

export const siteTitle = 'Mykhaylo Ryechkin';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableSystem={false}
      forcedTheme={Component.theme || undefined}
    >
      <MDXProvider components={MDX}>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <div className="dark:text-gray-50 text-gray-500 selection:bg-cyan-100 bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900">
          <Component {...pageProps} />
        </div>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
