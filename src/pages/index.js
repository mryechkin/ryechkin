/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import { FiSmile } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Image from 'next/image';

import { Header, Layout, RickRoll, SEO, Tags } from '@/components';
import markdownToHtml from '@/lib/markdown';
import { getDataBySlug } from '@/lib/posts';

export default function Home({ data, isDark, setIsDark }) {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (confetti) setConfetti(false);
  }, [confetti]);

  return (
    <Layout isDark={isDark} setIsDark={setIsDark}>
      <SEO description={data.description} title={data.title} />
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
        <div className="mt-4">
          I also go by <span className="accent font-extrabold">Misha</span>. I&apos;m a
          software engineer based in <span className="accent-no-bg">{data.location}</span>
          . I write code for a living, drink more coffee than I probably should, and
          listen to a lot of electronic music in the process <RickRoll />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
        <div className="mt-4">
          <div>
            Some of the technologies I&apos;ve recently been working with include:
          </div>
          <Tags className="mt-4" list={data.technologies} />
        </div>
        <div className="mt-4">
          Check out my
          <span className="inline px-1">
            <a
              href="https://www.youtube.com/c/MykhayloRyechkin"
              alt="Mykhaylo's YouTube Channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <HiOutlineExternalLink className="inline-block ml-1 dark:text-cyan-300 text-cyan-500" />
          </span>
          channel as well for some of my development content and tutorials.
        </div>
        <div className="flex items-center justify-center mt-4">
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
  const post = getDataBySlug('about');
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      data: {
        ...post,
        content,
      },
    },
  };
}
