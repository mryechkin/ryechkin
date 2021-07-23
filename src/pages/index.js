/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import { FiSmile } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Image from 'next/image';

import { Header, Layout, RickRoll, Tags } from '@/components';

const skills = [
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'GraphQL',
  'TailwindCSS',
  'Auth0',
  'Babel',
  'Rollup',
  'Strapi',
  'Storybook',
  'Vercel',
  '...more',
];

export default function Home({ isDark, setIsDark }) {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (confetti) setConfetti(false);
  }, [confetti]);

  return (
    <Layout isDark={isDark} setIsDark={setIsDark}>
      <Header setConfetti={setConfetti} />
      <div className="flex items-center justify-center w-full">
        <Confetti active={confetti} />
      </div>
      <div className="flex items-center justify-center mb-4 mt-2 mx-auto max-w-5xl md:mb-8 md:mt-4">
        <Image src="/assets/header.jpg" alt="Header image" width={480} height={120} />
      </div>
      <div className="z-10 mx-auto max-w-full">
        <div className="mt-4 text-center sm:text-left">
          I&apos;m a software engineer based in{' '}
          <span className="accent-no-bg">Kitchener, Canada</span>. I write code for a
          living, drink more coffee than I probably should, and listen to a lot of
          electronic music in the process <RickRoll />
        </div>
        <div className="mt-4 text-center sm:text-left">
          In my current role as a{' '}
          <span className="accent-no-bg">Lead Software Engineer</span> at{' '}
          <span className="accent-no-bg">Manulife</span>, I&apos;m a core maintainer and
          the technical product owner of an internal &quot;inner-source&quot; component
          library for React. I work with engineers and designers to establish an
          end-to-end design system at Manulife.
        </div>
        <div className="mt-4 text-center sm:text-left">
          I originally studied{' '}
          <span className="accent-no-bg">Telecommunications Engineering</span> at{' '}
          <span className="accent-no-bg">Carleton University</span>, but my focus and
          passion have always been in web technologies. I&apos;been developing
          enterprise-grade software for
          <span className="accent font-black">12</span> years now.
        </div>
        <div className="mt-4 text-center sm:text-left">
          <div>
            Some of the technologies I&apos;ve recently been working with include:
          </div>
          <Tags list={skills} />
        </div>
        <div className="mt-4">
          Check out my
          <a
            href="https://www.youtube.com/c/MykhayloRyechkin"
            alt="Mykhaylo's YouTube Channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          {/* <span className="inline px-1">
            <a
              href="https://www.youtube.com/c/MykhayloRyechkin"
              alt="Mykhaylo's YouTube Channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <HiOutlineExternalLink className="inline-block ml-1 dark:text-cyan-300 text-cyan-500" />
          </span> */}
          channel as well, where I share various content and tutorials on all things web.
        </div>
        <div className="flex items-center justify-center mt-4">
          Thanks for stopping by
          <span className="pl-2 dark:text-indigo-300 text-indigo-400 text-2xl">
            <FiSmile />
          </span>
        </div>
      </div>
    </Layout>
  );
}
