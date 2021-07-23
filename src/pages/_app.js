import Head from 'next/head';
import { ThemeProvider, useTheme } from 'next-themes';

import '@/styles/globals.css';
import '@/styles/prism.css';

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
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteTitle} />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="misha.wtf" />
      </Head>
      <div className="dark:text-gray-50 text-gray-500 selection:bg-cyan-100 bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
