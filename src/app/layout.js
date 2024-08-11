/* eslint-disable import/no-unresolved */
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

import 'src/styles/fonts.css';
import 'src/styles/globals.css';

import Providers from 'src/components/Providers';
import { preloadSearchIndex } from 'src/lib/utils/getSearchIndex';

export const metadata = {
  metadataBase: 'https://misha.wtf',
  title: 'Mykhaylo Ryechkin',
  description: 'UX engineering, design systems, and all things modern web.',
  openGraph: {
    title: 'Mykhaylo Ryechkin',
    description: 'UX engineering, design systems, and all things modern web.',
    images: [
      {
        url: 'https://www.misha.wtf/_next/image?url=%2Fseo.jpg&w=1200&q=100',
        width: 1200,
        height: 627,
        alt: 'Mykhaylo Ryechkin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mykhaylo Ryechkin',
    description: 'UX engineering, design systems, and all things modern web.',
    images: ['https://www.misha.wtf/_next/image?url=%2Fseo.jpg&w=1200&q=100'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  preloadSearchIndex();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-900">
            {children}
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
        <Script
          async
          src="https://umami-one-delta.vercel.app/script.js"
          data-website-id={process.env.NEXT_PUBLIC_WEBSITE_ID}
        />
      </body>
    </html>
  );
}
