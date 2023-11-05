// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import Script from 'next/script';

import SEO from '../../next-seo.config';

import 'src/styles/fonts.css';
import 'src/styles/globals.css';

export const siteTitle = 'Mykhaylo Ryechkin';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        enableSystem={false}
        // value={{ dark: 'wtf-dark' }}
      >
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-900">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
      <Analytics />
      <Script
        async
        src="https://umami-one-delta.vercel.app/script.js"
        data-website-id="503ae3df-f7a4-4e92-a22f-3cadc8373533"
      />
    </>
  );
}
