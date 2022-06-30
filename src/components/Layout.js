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
    <div className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-gray-50 bg-pattern-light bg-left-top bg-repeat bg-origin-content dark:bg-gray-800 dark:bg-pattern-dark">
      <motion.header
        className="fixed z-10"
        initial="show"
        transition={{ duration: 0.3, type: 'tween' }}
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
        <div className="h-4 w-full bg-blue-600" />
        <div className="flex h-4 w-full items-center justify-center bg-yellow-300 text-center">
          <a
            className="h-4 text-xs font-bold uppercase tracking-wider text-blue-600"
            href="https://war.ukraine.ua/"
            title="Donate to support Ukraine #StandWithUkraine"
            target="_blank"
            rel="noreferrer"
          >
            #StandWithUkraine
          </a>
        </div>
        <div className="blurred-backdrop w-screen border-b border-gray-200 dark:border-gray-900">
          <div className="mx-auto flex w-full max-w-5xl flex-nowrap items-center justify-between px-4 py-2 md:px-2">
            <div className="flex items-center justify-between gap-2 font-bold tracking-tighter md:grow-0">
              <Avatar setConfetti={setConfetti} />
              <Link href="/">
                <a className="hidden p-2 text-xl font-normal uppercase text-gray-800 dark:text-gray-50 md:block">
                  <span className="mr-1 font-black">Mykhaylo</span>Ryechkin
                </a>
              </Link>
            </div>
            <Link href="/">
              <a className="p-2 text-base font-normal uppercase text-gray-800 dark:text-gray-50 sm:text-lg md:hidden">
                <span className="mr-1 font-black">Mykhaylo</span>Ryechkin
              </a>
            </Link>
            <div className="relative flex items-center justify-center">
              <Menu />
              <div className="hidden w-full min-w-[4rem] items-center justify-center md:flex">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </motion.header>
      <div className="fixed top-12 flex w-full items-center justify-center">
        <Confetti
          active={confetti}
          config={{ colors: ['#2563eb', '#fde047'], spread: 360 }}
        />
      </div>
      <main className="mt-24 w-full max-w-none overflow-hidden">
        <div className={cn('mx-auto max-w-5xl p-6 md:p-8', className)}>{children}</div>
      </main>
      <footer
        className={cn(
          'blurred-backdrop w-screen border-t border-gray-200 dark:border-gray-900',
          className
        )}
      >
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative mt-4 flex w-full flex-col items-center justify-center gap-y-4 sm:flex-row sm:justify-between">
            <Social />
            <Nav className="text-sm" aria-label="Bottom navigation" />
          </div>
          <div className="flex grow-0 flex-wrap items-center justify-center py-6 text-xs tracking-tight text-gray-800 dark:text-white sm:py-8">
            <span>&copy; {year}</span>
            <span className="ml-1 font-semibold tracking-wide">Mykhaylo Ryechkin</span>.
            <span className="ml-1 font-normal">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
