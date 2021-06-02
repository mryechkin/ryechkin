/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import Image from 'next/image';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaHeadphones } from 'react-icons/fa';

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

export default function Home() {
  const [wave, setWave] = useState(false);

  useEffect(() => {
    if (wave) setWave(false);
  }, [wave]);

  return (
    <GradientContainer className="bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900">
      <main className="flex flex-col items-center justify-center p-2 w-full text-center text-base sm:p-4 md:p-8 md:max-w-3xl md:text-lg lg:max-w-5xl">
        <div className="flex flex-col items-center justify-center mb-4 md:mb-8">
          <h1 className="text-left text-transparent font-sans text-5xl font-light leading-normal bg-gradient-to-r bg-clip-text dark:from-yellow-300 from-yellow-400 dark:to-blue-300 to-blue-400 dark:via-pink-300 via-pink-500 sm:text-center md:text-6xl lg:text-7xl">
            Hey
            <button
              type="button"
              className="p-2 transform active:scale-150 hover:animate-wiggle focus:animate-wiggle"
              onClick={() => setWave(true)}
            >
              <Image src="/assets/wave.png" alt="Wave" height={40} width={40} />
            </button>
            <span className="mt-4 sm:ml-2">
              <span>I&apos;m</span>
              <span className="ml-2 font-black tracking-tighter">Mykhaylo.</span>
            </span>
          </h1>
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
            I'm a <span className="font-semibold">Kitchener (Ontario)</span> based
            software engineer, currently working as a Lead Software Engineer at{' '}
            <span className="accent">Manulife</span>.
          </p>
          <p className="mt-4 px-2 w-full text-left sm:px-4">
            I originally studied Telecommunications Engineering at Carleton University,
            but my focus and passion have always been in web technologies, and I've been
            developing enterprise-grade software for over 12 years now.
          </p>
          <p className="mt-4 px-2 w-full text-left sm:px-4">
            My current personal stack consists of{' '}
            <span className="font-mono">Next.js, Auth0, FaunaDB, TailwindCSS</span> and
            more.
          </p>
          <p className="my-4 px-2 w-full text-left sm:px-4">
            I also have some content about various things in the world of{' '}
            <span className="accent">JavaScript</span>. Check it out on{' '}
            <span className="inline-block">
              <a
                href="https://www.youtube.com/channel/UCWS51MbLHKtzEmYLtExyshQ"
                alt="Mykhaylo's YouTube"
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
