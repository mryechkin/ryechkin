import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { ThemeProvider as StyledProvider } from 'styled-components';

import theme from 'src/lib/theme';

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
        <StyledProvider theme={theme}>
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
        </StyledProvider>
      </ThemeProvider>
      <Analytics />
    </>
  );
}
