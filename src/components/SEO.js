import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function SEO({ canonical, description, image, openGraph, title }) {
  const fullTitle = title ? `${title} - Mykhaylo Ryechkin` : 'Mykhaylo Ryechkin';

  // const options = {
  //   bg: 'white',
  //   color: '#111827',
  //   divider: '132px',
  //   title: 'misha.wtf ➭',
  //   split: '65%',
  //   image: 'https://i.imgur.com/343jAEo.jpg',
  //   gradient: 'linear-gradient(to right, #fcd34d, #22d3ee, #d946ef)',
  // };

  // const api = 'https://i.microlink.io/';
  // const cardUrl = `https://cards.microlink.io/?preset=swyxdotio&title=${options.title}&image=${options.image}&gradient=${options.gradient}&description=${title}`;
  // const image = `${api}${encodeURIComponent(cardUrl)}`;

  return (
    <>
      <Head>
        <meta
          name="og:image"
          content={
            image || 'https://www.misha.wtf/_next/image?url=%2Fseo.jpg&w=1200&q=100'
          }
        />
        <meta name="twitter:title" content={fullTitle} />
      </Head>
      <NextSeo
        description={
          description || 'UX engineering, design systems, and all things modern web.'
        }
        title={title}
        titleTemplate="%s - Mykhaylo Ryechkin"
        defaultTitle="Mykhaylo Ryechkin"
        canonical={canonical}
        openGraph={
          openGraph || {
            title: fullTitle,
            images: [
              {
                url:
                  image ||
                  'https://www.misha.wtf/_next/image?url=%2Fseo.jpg&w=1200&q=100',
                width: 1200,
                height: 627,
                alt: 'Mykhaylo Ryechkin',
              },
            ],
            description,
          }
        }
      />
    </>
  );
}
