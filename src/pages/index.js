/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { Counter, Header, Layout, SEO } from '@/components';
import { getDataBySlug } from '@/lib/data';
import { getMdxSource } from '@/lib/mdx';

export default function Home({ isDark, setIsDark, data, source }) {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (confetti) setConfetti(false);
  }, [confetti]);

  return (
    <Layout isDark={isDark} setIsDark={setIsDark}>
      <SEO title="Mykhaylo Ryechkin" />
      <Header setConfetti={setConfetti} />
      <div className="flex items-center justify-center w-full">
        <Confetti active={confetti} />
      </div>
      <div className="flex items-center justify-center mb-4 mt-2 mx-auto max-w-5xl md:mb-8 md:mt-4">
        <Image
          src="/assets/header.jpg"
          alt="Header Image"
          width={480}
          height={120}
          quality={100}
          priority
        />
      </div>
      <div className="z-10 mx-auto max-w-full">
        <MDXRemote {...source} />
      </div>
      <div className="flex items-center justify-center pt-8 sm:pt-12">
        <Counter />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const post = getDataBySlug('about');
  const source = await getMdxSource(post);

  return {
    props: {
      data: post.data,
      source,
    },
  };
}
