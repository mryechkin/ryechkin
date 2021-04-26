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
    <main className="flex flex-1 flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center mb-8 px-4 w-full sm:px-4 md:max-w-xl">
        <h1 className="text-3xl font-extralight sm:text-4xl md:text-5xl">
          Hey!{' '}
          <button
            type="button"
            className="p-2 transform active:scale-150 hover:animate-wiggle focus:animate-wiggle"
            onClick={() => setWave(true)}
          >
            <Image src="/assets/wave.png" alt="Wave" height={30} width={30} />
          </button>
          <span className="text-md ml-2 mt-4 text-transparent bg-gradient-to-r bg-clip-text from-yellow-400 to-pink-500 via-pink-500 sm:text-xl sm:from-red-400 sm:to-yellow-400 sm:via-pink-500 md:text-2xl">
            <span className="font-extrabold">I&apos;m</span>
            <span className="ml-1 font-black">Mykhaylo.</span>
          </span>
        </h1>
        <Confetti active={wave} />
      </div>
      <p className="sm:text-md mt-4 px-4 w-full text-left text-sm sm:px-4 md:max-w-4xl md:text-center md:text-base">
        I write code for a living, drink more coffee than I probably should, and listen to
        mostly electronic music in the process.
      </p>
      <p className="sm:text-md mt-4 px-4 w-full text-left text-sm sm:px-4 md:max-w-4xl md:text-center md:text-base">
        I was born in 🇺🇦{' '}
        <span className="text-transparent font-semibold bg-gradient-to-r bg-clip-text from-blue-400 to-yellow-400">
          Ukraine
        </span>{' '}
        but have been living in 🇨🇦{' '}
        <span className="text-transparent font-semibold bg-gradient-to-r bg-clip-text dark:from-red-500 from-red-700 dark:to-red-300 to-red-500">
          Canada
        </span>{' '}
        for most of my adult life.
      </p>
      <p className="sm:text-md mt-4 px-4 w-full text-left text-sm sm:px-4 md:max-w-4xl md:text-center md:text-base">
        I originally studied Communications Engineering at Carleton University, but have
        chosen the path of web development fairly early on in my career, and have since
        been in the industry for over 12 years.
      </p>
      <p className="sm:text-md mt-4 px-4 w-full text-left text-sm sm:px-4 md:max-w-4xl md:text-center md:text-base">
        Recently I started documenting my learnings in the world of{' '}
        <span className="p-1 dark:text-green-300 text-green-600 font-mono bg-green-50 dark:bg-green-900">
          JavaScript
        </span>{' '}
        on&nbsp;
        <a
          href="https://www.youtube.com/channel/UCWS51MbLHKtzEmYLtExyshQ"
          alt="Mykhaylo's YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        . Follow along 🙂
      </p>
      <div className="flex items-center justify-center mt-12 w-full max-w-4xl">
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
    </main>
  );
}
