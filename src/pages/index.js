import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import { FiSmile } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';

import { Avatar, Layout, More, PeaceSign, SEO, Separator, Videos } from '@/components';
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
      <div className="flex flex-col items-center justify-center py-2 sm:py-4">
        <div className="w-full max-w-3xl font-sans text-3xl font-bold tracking-tighter sm:text-center sm:text-5xl md:text-6xl">
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
            <span className="retro ml-1 sm:ml-2">Mykhaylo</span>
            <Avatar className="hidden sm:flex sm:ml-6" setConfetti={setConfetti} />
          </span>
        </div>
        <div className="flex items-center justify-center mt-2 w-full max-w-2xl text-blue-500 dark:text-rose-200 font-sans text-base sm:mt-1">
          <span className="ml-1 font-medium">(like</span>
          <span className="ml-1 font-black">&quot;Kylo&quot;</span>
          <span className="font-medium">)</span>
        </div>
        <Confetti active={confetti} config={{ spread: 360 }} />
      </div>
      <div className="z-10 items-center justify-center mx-auto max-w-full text-center">
        <div className="mx-auto max-w-4xl">
          <MDXRemote {...source} />
          <span className="inline-flex items-center justify-center">
            <span className="accent font-bold">{`{ ... }`}</span>
            <Link href="/about" passHref>
              <More className="ml-2" />
            </Link>
          </span>
        </div>
        <Separator />
        <h1>Latest Videos</h1>
        <Videos />
        <Separator />
        <div className="inline-flex items-center justify-center w-full">
          Thanks for stopping by
          <span className="pl-2 text-blue-400 dark:text-rose-400 text-2xl">
            <FiSmile />
          </span>
        </div>
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
