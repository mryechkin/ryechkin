import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function SEO({ description, title }) {
  const fullTitle = `${title} | Misha.WTF`;
  return (
    <>
      <Head>
        <meta
          name="og:image"
          content="https://www.misha.wtf/_next/image?url=%2Fseo.jpg&w=1200&q=100"
        />
        <meta name="twitter:title" content={fullTitle} />
      </Head>
      <NextSeo
        description={description || 'Front-end development, and all things modern web'}
        title={title}
        openGraph={{
          title: fullTitle,
          description,
        }}
      />
    </>
  );
}
