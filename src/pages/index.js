import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import { MDXRemote } from 'next-mdx-remote';

import { Header, Layout, PeaceSign, SEO, Separator, Videos } from '@/components';
import { getDataBySlug } from '@/lib/data';
import { getMdxSource } from '@/lib/mdx';

export default function Home({ data, source }) {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (confetti) setConfetti(false);
  }, [confetti]);

  return (
    <Layout>
      <SEO title={data.title} />
      <Header />
      <div className="flex items-center justify-center w-full">
        <Confetti active={confetti} />
      </div>
      <div className="flex flex-col items-center justify-center py-2 sm:py-4">
        <div className="w-full max-w-3xl font-sans text-3xl font-bold tracking-tighter sm:text-center sm:text-6xl">
          <span className="flex flex-wrap items-center justify-center">
            <span className="flex items-center justify-center p-2 dark:text-yellow-300 text-yellow-400">
              Hey
              <PeaceSign
                className="p-2"
                innerClassName="h-6 w-6 sm:w-12 sm:h-12"
                setConfetti={setConfetti}
              />
              I&apos;m
            </span>
            <span className="retro ml-1 sm:ml-2">Mykhaylo.</span>
          </span>
        </div>
        <div className="flex items-center justify-center mt-2 w-full max-w-2xl text-blue-500 dark:text-rose-200 font-sans text-base sm:mt-1">
          <span className="ml-1 font-medium">(like</span>
          <span className="ml-1 font-black">&quot;Kylo&quot;</span>
          <span className="font-medium">)</span>
        </div>
      </div>
      <div className="z-10 items-center justify-center mx-auto max-w-full text-center">
        <div className="mx-auto max-w-3xl">
          <MDXRemote {...source} />
        </div>
        <Separator />
        <Videos />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const post = getDataBySlug('index');
  const source = await getMdxSource(post);

  return {
    props: {
      data: post.data,
      source,
    },
  };
}
