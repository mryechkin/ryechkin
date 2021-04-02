import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import Head from 'next/head';
import Image from 'next/image';
import { HiExternalLink } from 'react-icons/hi';
import { SiGithub, SiLinkedin, SiTwitter, SiYoutube } from 'react-icons/si';

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
    <div className="flex flex-col items-center justify-center py-4 min-h-screen bg-gradient-to-r from-gray-50 to-white">
      <Head>
        <title>Mykhaylo Ryechkin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center px-4 w-full sm:px-4 md:max-w-xl">
          <h1 className="text-3xl font-thin sm:text-4xl md:text-5xl">
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
        <p className="sm:text-md mt-4 px-4 w-full text-left text-gray-500 text-sm sm:px-4 md:max-w-4xl md:text-center md:text-base">
          I write code for a living, drink more coffee than I probably should, and listen
          to mostly electronic music in the process.
        </p>
        <p className="sm:text-md mt-4 px-4 w-full text-left text-gray-500 text-sm sm:px-4 md:max-w-4xl md:text-center md:text-base">
          I was born in 🇺🇦{' '}
          <span className="text-transparent font-semibold bg-gradient-to-r bg-clip-text from-blue-400 to-yellow-400">
            Ukraine
          </span>{' '}
          and have been living in 🇨🇦{' '}
          <span className="text-transparent font-semibold bg-gradient-to-r bg-clip-text from-red-700 to-red-500">
            Canada
          </span>{' '}
          for over 20 years now.
        </p>
        <p className="sm:text-md mt-4 px-4 w-full text-left text-gray-500 text-sm sm:px-4 md:max-w-4xl md:text-center md:text-base">
          I originally studied Communications Engineering at Carleton University, but have
          chosen the path of web development fairly early on in my career, and have since
          been in the industry for over 12 years.
        </p>
        <p className="sm:text-md mt-4 px-4 w-full text-left text-gray-500 text-sm sm:px-4 md:max-w-4xl md:text-center md:text-base">
          Recently I started documenting my learnings in the world of{' '}
          <span className="p-1 text-green-600 font-mono bg-green-50">JavaScript</span>{' '}
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
        <div className="flex items-center justify-center mt-6 w-full max-w-4xl">
          <span className="flex sm:hidden">
            <Image src="/assets/banner3h.jpg" alt="Banner" width={320} height={480} />
          </span>
          <span className="flex sm:hidden">
            <Image src="/assets/banner4.jpg" alt="Banner" width={320} height={480} />
          </span>
          <span className="hidden sm:flex">
            <Image src="/assets/banner1.jpg" alt="Banner" width={320} height={480} />
          </span>
          <span className="hidden sm:flex">
            <Image src="/assets/banner2.jpg" alt="Banner" width={320} height={480} />
          </span>
          <span className="hidden sm:flex">
            <Image src="/assets/banner3.jpg" alt="Banner" width={320} height={480} />
          </span>
          <span className="hidden md:flex">
            <Image src="/assets/banner4.jpg" alt="Banner" width={320} height={480} />
          </span>
          <span className="hidden lg:flex">
            <Image src="/assets/banner1h2.jpg" alt="Banner" width={320} height={480} />
          </span>
        </div>
      </main>

      <footer>
        <div className="mx-auto px-4 py-2 max-w-7xl overflow-hidden sm:px-6 sm:py-8 md:py-12 lg:px-8">
          {/* <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
            <div className="px-5 py-2">
              <a href="/" className="text-gray-500 hover:text-gray-900 text-base">
                Home
              </a>
            </div>

            <div className="px-5 py-2">
              <a href="/blog" className="text-gray-500 hover:text-gray-900 text-base">
                Blog
              </a>
            </div>

            <div className="px-5 py-2">
              <a href="/about" className="text-gray-500 hover:text-gray-900 text-base">
                About
              </a>
            </div>
          </nav> */}
          <div className="flex justify-center mt-8 space-x-6">
            <a
              href="https://github.com/mryechkin"
              alt="Mykhaylo's GitHub"
              className="text-gray-400 hover:text-indigo-500 text-xl sm:text-3xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <SiGithub />
            </a>
            <a
              href="https://ca.linkedin.com/in/mryechkin"
              alt="Mykhaylo's LinkedIn"
              className="text-gray-400 hover:text-indigo-500 text-xl sm:text-3xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <SiLinkedin />
            </a>
            <a
              href="https://twitter.com/misha_est"
              alt="Mykhaylo's Twitter"
              className="text-gray-400 hover:text-indigo-500 text-xl sm:text-3xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <SiTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/UCWS51MbLHKtzEmYLtExyshQ"
              alt="Mykhaylo's YouTube"
              className="text-gray-400 hover:text-indigo-500 text-xl sm:text-3xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">YouTube</span>
              <SiYoutube />
            </a>
          </div>
          <p className="mt-8 text-center text-gray-400 text-xs sm:text-sm">
            &copy; 2021 <span className="font-semibold">Mykhaylo Ryechkin</span>.
            <span className="ml-1 font-light">Don&apos;t steal my stuff please.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
