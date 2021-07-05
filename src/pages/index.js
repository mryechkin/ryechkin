/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import { FaHandPeace, FaHeadphones } from 'react-icons/fa';
import { HiHeart, HiOutlineExternalLink } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import { RickRoll } from '@/components';

const images = {
  desktop: [
    '/assets/banner3h.jpg',
    '/assets/banner1.jpg',
    '/assets/banner2.jpg',
    '/assets/banner3.jpg',
    '/assets/banner1h2.jpg',
    '/assets/banner4.jpg',
    '/assets/banner1.jpg',
    '/assets/banner2.jpg',
    '/assets/banner3.jpg',
    '/assets/banner1h.jpg',
  ],
  mobile: [
    '/assets/banner3h.jpg',
    '/assets/banner1.jpg',
    '/assets/banner2.jpg',
    '/assets/banner3.jpg',
    '/assets/banner1h2.jpg',
  ],
};

const skills = [
  'JavaScript',
  'React',
  'Next.js',
  'GraphQL',
  'TailwindCSS',
  'Strapi',
  'Storybook',
  'Vercel',
];

export default function Home({ isDark }) {
  const [wave, setWave] = useState(false);

  useEffect(() => {
    if (wave) setWave(false);
  }, [wave]);

  return (
    <main className="flex flex-col items-center justify-center p-2 w-full min-w-min text-center text-base sm:p-4 md:p-8 md:max-w-3xl md:text-lg lg:max-w-5xl">
      <div className="flex flex-col items-center justify-center mb-4 md:mb-8">
        <h1 className="rainbow text-left font-sans text-5xl font-medium tracking-tighter sm:text-center md:text-6xl lg:text-7xl">
          <span className="leading-normal">Hey</span>
          <motion.button
            type="button"
            className="p-3"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setWave(true)}
          >
            <FaHandPeace className="w-8 h-8 dark:text-yellow-300 text-yellow-400 font-bold" />
          </motion.button>
          <span className="mt-4 sm:ml-2">
            I&apos;m
            <span className="retro ml-4 text-blue-100 dark:text-rose-200 font-black tracking-tighter">
              Mykhaylo.
            </span>
          </span>
        </h1>
        <h3 className="sm:text-md inline-flex items-center self-end align-middle mt-4 text-blue-400 dark:text-rose-400 font-sans text-sm sm:mt-0">
          <span className="ml-1 font-medium">(like</span>
          <span className="ml-1 font-black">&quot;Kylo&quot;</span>
          <span className="font-medium">)</span>
        </h3>
        <Confetti active={wave} />
      </div>
      <div className="flex items-center justify-center mb-4 mt-2 max-w-4xl md:mb-8 md:mt-4">
        <span className="hidden sm:flex">
          {images.desktop.map((img, i) => (
            <Image key={`desktop-${img}-${i}`} src={img} width={90} height={135} />
          ))}
        </span>
        <span className="flex sm:hidden">
          {images.mobile.map((img, i) => (
            <Image key={`mobile-${img}-${i}`} src={img} width={80} height={120} />
          ))}
        </span>
      </div>
      <div className="flex items-center justify-center my-4 sm:my-8">
        {!isDark && (
          <Image src="/assets/kyloren3.svg" height="60" width="60" alt="Kylo Ren" />
        )}
        {isDark && (
          <Image
            src="/assets/kyloren3-inverse.svg"
            height="60"
            width="60"
            alt="Kylo Ren"
          />
        )}
      </div>
      <div className="mx-auto max-w-full dark:text-gray-50 text-gray-800 font-body">
        <div className="mt-4 text-left">
          I write code for a living, drink more coffee than I probably should, and listen
          to a lot of electronic music in the process <RickRoll />
        </div>
        <div className="mt-4 text-left">
          I am a software engineer based in{' '}
          <span className="accent-no-bg">Kitchener, Ontario, Canada</span>, currently
          working as a Lead Software Engineer at{' '}
          <span className="accent-no-bg">Manulife</span>.
        </div>
        <div className="mt-4 text-left">
          I originally studied{' '}
          <span className="accent-no-bg">Telecommunications Engineering</span> at{' '}
          <span className="accent-no-bg">Carleton University</span>, but my focus and
          passion have always been in web technologies.
        </div>
        <div className="mt-4 text-left">
          I&apos;ve been developing enterprise-grade software for over{' '}
          <span className="accent-no-bg">12</span> years now (7 of those at{' '}
          <span className="accent-no-bg">BlackBerry</span>)
        </div>
        <div className="mt-4 text-left">
          Some of the technologies I&apos;ve been recently working with include:
          <span className="flex flex-wrap font-mono">
            <span className="accent">&#123;</span>
            {skills.map((skill) => (
              <span key={skill} className="accent pr-1">
                {skill},
              </span>
            ))}
            <span className="accent">...etc</span>
            <span className="accent">&#125;</span>
          </span>
        </div>
        <div className="my-4 text-left">
          I also have a
          <span className="inline-block px-1">
            <a
              href="https://www.youtube.com/channel/UCWS51MbLHKtzEmYLtExyshQ"
              alt="Mykhaylo's YouTube Channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <HiOutlineExternalLink className="inline-block ml-1 dark:text-blue-300 text-blue-400" />
          </span>
          channel where I share content on various topics in the world of modern web
          development.
        </div>
      </div>
    </main>
  );
}
