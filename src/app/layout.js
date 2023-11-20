// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

import 'src/styles/fonts.css';
import 'src/styles/globals.css';

import Providers from 'src/components/Providers';

export const metadata = {
  metadataBase: 'https://misha.wtf',
  title: 'Mykhaylo Ryechkin',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-900">
            {children}
          </div>
        </Providers>
        <Analytics />
        <Script
          async
          src="https://umami-one-delta.vercel.app/script.js"
          data-website-id={process.env.NEXT_PUBLIC_WEBSITE_ID}
        />
      </body>
    </html>
  );
}
