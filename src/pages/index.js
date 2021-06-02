/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import Image from 'next/image';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaHandPeace, FaHeadphones } from 'react-icons/fa';

import { GradientContainer } from '@/components';

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

export default function Home({ isDark }) {
  const [wave, setWave] = useState(false);

  useEffect(() => {
    if (wave) setWave(false);
  }, [wave]);

  return (
    <GradientContainer className="bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900">
      <main className="flex flex-col items-center justify-center p-2 w-full text-center text-base sm:p-4 md:p-8 md:max-w-3xl md:text-lg lg:max-w-5xl">
        <div className="flex flex-col items-center justify-center mb-4 md:mb-8">
          <h1 className="rainbow text-left font-sans text-5xl font-semibold tracking-tighter sm:text-center md:text-6xl lg:text-7xl">
            <span className="leading-normal">Hey</span>
            <button
              type="button"
              className="animate-slow p-2 transform active:scale-150 hover:animate-wiggle focus:animate-wiggle"
              onClick={() => setWave(true)}
            >
              <FaHandPeace className="w-8 h-8 dark:text-yellow-300 text-yellow-400 font-bold" />
            </button>
            <span className="mt-4 sm:ml-2">
              I&apos;m
              <span className="retro dark:text-rose-200 ml-4 text-blue-100 font-black tracking-tighter">
                Mykhaylo.
              </span>
            </span>
          </h1>
          <h3 className="dark:text-rose-400 inline-flex items-center self-end align-middle mt-2 text-blue-400 font-sans text-xs font-black sm:mt-0 sm:text-sm">
            <span>like "Kylo"</span>
            <span className="ml-1">
              {!isDark && (
                <Image src="/assets/kyloren4.svg" height="30" width="30" alt="Kylo Ren" />
              )}
              {isDark && (
                <Image
                  src="/assets/kyloren4-inverse.svg"
                  height="30"
                  width="30"
                  alt="Kylo Ren"
                />
              )}
            </span>
          </h3>
          <Confetti active={wave} />
        </div>
        <div className="flex items-center justify-center mb-4 mt-2 w-full max-w-4xl md:mb-8 md:mt-4">
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
        <div className="font-body dark:text-gray-50 text-gray-800">
          <p className="mt-4 px-2 w-full text-left sm:px-4">
            I write code for a living, drink more coffee than I probably should, and
            listen to a lot of electronic music in the process{' '}
            <span className="inline-block ml-1">
              <FaHeadphones className="dark:text-indigo-300 text-indigo-400" />
            </span>
          </p>
          <p className="mt-4 px-2 w-full text-left sm:px-4">
            I'm a software engineer based in{' '}
            <span className="accent">Kitchener, Ontario, Canada</span>, currently working
            as a Lead Software Engineer at <span className="accent">Manulife</span>.
          </p>
          <p className="mt-4 px-2 w-full text-left sm:px-4">
            I originally studied Telecommunications Engineering at Carleton University,
            but my focus and passion have always been in web technologies. I've been
            developing enterprise-grade software for over 12 years now.
          </p>
          <p className="mt-4 px-2 w-full text-left sm:px-4">
            Some of the tech I'm currently using in personal projects consists of{' '}
            <span className="font-mono">
              Next.js, GraphQL, Auth0, FaunaDB, TailwindCSS, Strapi
            </span>{' '}
            and more.
          </p>
          <p className="my-4 px-2 w-full text-left sm:px-4">
            Recently I've also started creating content on various topics in the world of
            modern web development. Check it out on{' '}
            <span className="inline-block">
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
          </p>
        </div>
      </main>
    </GradientContainer>
  );
}
