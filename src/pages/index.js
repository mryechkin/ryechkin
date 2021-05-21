/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import Image from 'next/image';

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

  function setDocHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
  }

  useEffect(() => {
    window.addEventListener('resize', setDocHeight);
    window.addEventListener('orientationchange', setDocHeight);

    setDocHeight();
  }, []);

  useEffect(() => {
    if (wave) setWave(false);
  }, [wave]);

  return (
    <main className="bg-white/50 dark:bg-gray-800/50 flex flex-col items-center justify-center p-4 w-full text-center text-sm rounded-xl shadow dark:shadow-md sm:rounded-2xl md:p-8 md:max-w-3xl md:text-base md:rounded-3xl lg:max-w-5xl">
      <div className="flex flex-col items-center justify-center mb-4 px-4 md:mb-8">
        <h1 className="text-left text-transparent text-5xl font-light leading-normal bg-gradient-to-r bg-clip-text dark:from-yellow-300 from-yellow-400 dark:to-blue-300 to-blue-400 dark:via-pink-300 via-pink-500 sm:text-center md:text-6xl lg:text-7xl">
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
      <p className="mt-4 px-4 w-full text-left sm:px-4 md:text-center">
        I write code for a living, drink more coffee than I probably should, and listen to
        mostly electronic music in the process.
      </p>
      <p className="mt-4 px-4 w-full text-left sm:px-4 md:text-center">
        I was born in{' '}
        <span className="text-transparent font-bold bg-gradient-to-r bg-clip-text from-blue-400 to-yellow-500">
          Ukraine
        </span>{' '}
        but have been living in{' '}
        <span className="text-transparent font-bold bg-gradient-to-r bg-clip-text dark:from-red-500 from-red-700 dark:to-red-300 to-red-500">
          Canada
        </span>{' '}
        for most of my adult life.
      </p>
      <p className="mt-4 px-4 w-full text-left sm:px-4 md:text-center">
        I'm a software engineer at <span className="accent">Manulife</span>, and have been
        doing development for over 12 years now. I originally studied Telecommunications
        Engineering at Carleton University, but my focus and passion have always been in
        web technologies.
      </p>
      <p className="mt-4 px-4 w-full text-left sm:px-4 md:text-center">
        Recently I started sharing my learnings in the world of{' '}
        <span className="accent">JavaScript</span> on{' '}
        <a
          href="https://www.youtube.com/channel/UCWS51MbLHKtzEmYLtExyshQ"
          alt="Mykhaylo's YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        .
      </p>
    </main>
  );
}
