import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { ThemeProvider as StyledProvider } from 'styled-components';

// eslint-disable-next-line import/order
import SEO from '../../next-seo.config';

import '@/styles/fonts.css';
import '@/styles/globals.css';

import { usePanelbear } from '@/lib/analytics';
import theme from '@/lib/theme';

export const siteTitle = 'Mykhaylo Ryechkin';

export default function App({ Component, pageProps }) {
  usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableSystem={false}
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
        {/* <GoogleAnalytics /> */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-900">
          <Component {...pageProps} />
        </div>
      </StyledProvider>
    </ThemeProvider>
  );
}
