/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import { FaHandPeace } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Layout, RickRoll } from '@/components';

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
];

export default function Home({ isDark, setIsDark }) {
  const [wave, setWave] = useState(false);

  useEffect(() => {
    if (wave) setWave(false);
  }, [wave]);

  return (
    <Layout isDark={isDark} setIsDark={setIsDark}>
      <div className="flex flex-col items-center justify-center py-2 sm:py-8">
        <div className="font-sans text-5xl font-bold tracking-tighter sm:text-center md:text-6xl lg:text-7xl">
          <span className="flex flex-wrap items-center justify-center">
            <span className="flex items-center justify-center p-2 dark:text-yellow-300 text-yellow-400">
              Hey
              <motion.button
                type="button"
                className="p-4"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setWave(true)}
              >
                <FaHandPeace className="w-8 h-8 dark:text-yellow-300 text-yellow-400 font-bold sm:w-12 sm:h-12" />
              </motion.button>
              I&apos;m
            </span>
            <span className="retro ml-4 text-blue-200 dark:text-rose-200 font-black tracking-tighter">
              Mykhaylo.
            </span>
          </span>
        </div>
        <div className="sm:text-md inline-flex items-center self-end align-middle mr-12 mt-4 text-blue-400 dark:text-rose-400 font-sans text-base sm:mr-16 sm:mt-0 sm:text-lg md:mr-20 lg:mr-24">
          <span className="ml-1 font-medium">(like</span>
          <span className="ml-1 font-black">&quot;Kylo&quot;</span>
          <span className="font-medium">)</span>
        </div>
        <Confetti active={wave} />
      </div>
      <div className="flex items-center justify-center mb-4 mt-2 mx-auto max-w-5xl md:mb-8 md:mt-4">
        <Image src="/assets/header.jpg" width={450} height={135} />
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
          <span className="accent-no-bg">Manulife</span>, I&apos;m the technical product
          owner and one of the core maintainers of an &quot;inner-source&quot; component
          library for React at Manulife.
        </div>
        <div className="mt-4 text-center sm:text-left">
          Originally studied{' '}
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
          <div className="accent inline">
            &#123;&nbsp;
            {skills.join(', ')}
            ,&nbsp;...etc&nbsp;&#125;
          </div>
        </div>
        <div className="my-4 text-center sm:text-left">
          Thanks for stopping by <span className="text-2xl">☺</span> Check out my
          <span className="inline-block px-1">
            <a
              href="https://www.youtube.com/channel/UCWS51MbLHKtzEmYLtExyshQ"
              alt="Mykhaylo's YouTube Channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <HiOutlineExternalLink className="inline-block ml-1 dark:text-cyan-300 text-cyan-500" />
          </span>
          channel, where I share various content and tutorials on all things web.
        </div>
      </div>
    </Layout>
  );
}
