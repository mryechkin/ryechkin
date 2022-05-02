import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import cn from 'classnames/dedupe';
import { motion, useViewportScroll } from 'framer-motion';
import Link from 'next/link';

import Avatar from './Avatar';
import DarkModeToggle from './DarkModeToggle';
import Menu, { Nav } from './Menu';
import Social from './Social';

import { useConfetti } from '@/lib/hooks';

const SCROLL_THRESHOLD = 80;

export default function Layout({ className, children }) {
  const [confetti, setConfetti] = useConfetti();
  const year = new Date().getFullYear();
  const { scrollY } = useViewportScroll();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 0) return;
      setShowHeader(latest - scrollY.getPrevious() <= 0 || latest < SCROLL_THRESHOLD);
    });
  }, [scrollY]);

  return (
    <div className="relative flex flex-col justify-between w-full min-h-screen overflow-hidden bg-left-top bg-repeat bg-gray-50 bg-pattern-light bg-origin-content dark:bg-gray-800 dark:bg-pattern-dark">
      <motion.header
        className="fixed z-30"
        initial="show"
        transition={{ duration: 0.2, type: 'tween' }}
        variants={{
          show: {
            y: 0,
          },
          hide: {
            y: '-100%',
          },
        }}
        animate={showHeader ? 'show' : 'hide'}
      >
        <div className="w-full h-4 bg-blue-600" />
        <div className="flex items-center justify-center w-full h-4 text-center bg-yellow-300">
          <a
            className="h-4 text-xs font-bold tracking-wider text-blue-600 uppercase"
            href="https://stand-with-ukraine.pp.ua/"
            title="Donate to support Ukraine #StandWithUkraine"
            target="_blank"
            rel="noreferrer"
          >
            #StandWithUkraine
          </a>
        </div>
        <div className="w-screen border-b border-gray-200 blurred-backdrop dark:border-gray-900">
          <div className="flex items-center justify-between w-full max-w-5xl px-4 py-2 mx-auto flex-nowrap md:px-2">
            <div className="flex items-center justify-between gap-2 font-bold tracking-tighter">
              <Avatar setConfetti={setConfetti} />
              <Link href="/">
                <a className="hidden p-2 text-xl font-normal text-gray-800 uppercase dark:text-gray-50 md:block ">
                  <span className="mr-1 font-black">Mykhaylo</span>Ryechkin
                </a>
              </Link>
            </div>
            <div className="relative flex items-center justify-center">
              <Menu />
              <div className="hidden w-full min-w-[4rem] items-center justify-center md:flex">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </motion.header>
      <div className="fixed flex items-center justify-center w-full top-12">
        <Confetti
          active={confetti}
          config={{ colors: ['#2563eb', '#fde047'], spread: 360 }}
        />
      </div>
      <main className="w-full mt-24 overflow-hidden max-w-none">
        <div className={cn('mx-auto max-w-5xl p-6 md:p-8', className)}>{children}</div>
      </main>
      <footer
        className={cn(
          'blurred-backdrop w-screen border-t border-gray-200 dark:border-gray-900',
          className
        )}
      >
        <div className="w-full max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="relative flex flex-col items-center justify-center w-full mt-4 gap-y-4 sm:flex-row sm:justify-between">
            <Social />
            <Nav className="text-sm" aria-label="Bottom navigation" />
          </div>
          <div className="flex flex-wrap items-center justify-center flex-grow-0 py-6 text-xs tracking-tight text-gray-800 dark:text-white sm:py-8">
            <span>&copy; {year}</span>
            <span className="ml-1 font-semibold tracking-wide">Mykhaylo Ryechkin</span>.
            <span className="ml-1 font-normal">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
