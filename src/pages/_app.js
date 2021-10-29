/* eslint-disable import/no-extraneous-dependencies */
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { darkTheme, globalStyles, Provider as WTFProvider } from 'wtf-design-system';

import SEO from '../../next-seo.config';

import '@/styles/globals.css';
import '@/styles/prism.css';

import { GoogleAnalytics, MDX } from '@/components';
import { usePanelbear } from '@/lib/analytics';

export const siteTitle = 'Mykhaylo Ryechkin';

function App({ Component, pageProps }) {
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
          <div className="dark:text-gray-50 text-gray-500 selection:bg-cyan-100 bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900">
            <Component {...pageProps} />
          </div>
        </MDXProvider>
      </ThemeProvider>
    </WTFProvider>
  );
}

export default App;
