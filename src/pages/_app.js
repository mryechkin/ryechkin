/* eslint-disable import/no-extraneous-dependencies */
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { darkTheme, globalStyles, Provider as WTFProvider } from 'wtf-design-system';

// eslint-disable-next-line import/order
import SEO from '../../next-seo.config';

import '@/styles/globals.css';
import '@/styles/prism.css';

import { GoogleAnalytics, MDX } from '@/components';
import { usePanelbear } from '@/lib/analytics';

export const siteTitle = 'Mykhaylo Ryechkin';

export default function App({ Component, pageProps }) {
  globalStyles();

  usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID);

  return (
    <WTFProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        enableSystem={false}
        value={{ light: 'light', dark: darkTheme.className }}
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
          <GoogleAnalytics />
          <div className="text-gray-500 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-900 dark:text-gray-50">
            <Component {...pageProps} />
          </div>
        </MDXProvider>
      </ThemeProvider>
    </WTFProvider>
  );
}
