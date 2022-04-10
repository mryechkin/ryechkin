import Confetti from 'react-dom-confetti';
import cn from 'classnames/dedupe';
import Link from 'next/link';

import Avatar from './Avatar';
import DarkModeToggle from './DarkModeToggle';
import HomeButton from './HomeButton';
import Menu, { Nav } from './Menu';
import Social from './Social';

import { useConfetti } from '@/lib/hooks';

export default function Layout({ className, children, confetti = false }) {
  const [headerConfetti, setHeaderConfetti] = useConfetti();
  const year = new Date().getFullYear();

  return (
    <div className="w-full min-h-screen pt-4 overflow-hidden bg-blue-600">
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
      <div className="relative flex min-h-[var(--min-height)] flex-col justify-between bg-gray-50 bg-pattern-light bg-left-top bg-repeat bg-origin-content dark:bg-gray-800 dark:bg-pattern-dark">
        <header className="w-screen bg-gray-100 border-b border-gray-200 dark:border-gray-900 dark:bg-gray-800">
          <div className="flex items-center justify-between w-full max-w-5xl px-4 py-2 mx-auto flex-nowrap lg:px-2">
            <div className="items-center justify-between hidden gap-2 font-bold tracking-tighter lg:flex">
              <Avatar className="flex" setConfetti={setHeaderConfetti} />
              <Link href="/">
                <a className="p-2 text-xl font-normal text-gray-800 uppercase rounded-md dark:text-gray-50 lg:text-3xl">
                  <span className="font-black">Misha</span>.WTF
                </a>
              </Link>
            </div>
            <Avatar className="flex lg:hidden" setConfetti={setHeaderConfetti} />
            <Link href="/">
              <a className="p-2 text-xl font-normal text-gray-800 uppercase rounded-md dark:text-gray-50 lg:hidden lg:text-3xl">
                <span className="font-black">Misha</span>.WTF
              </a>
            </Link>
            <div className="relative flex items-center justify-center">
              <Menu />
              <div className="hidden w-full min-w-[4rem] items-center justify-center lg:flex">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </header>
        <div className="fixed flex items-center justify-center w-full">
          <Confetti active={confetti || headerConfetti} config={{ spread: 360 }} />
        </div>
        <main className="w-full overflow-hidden max-w-none">
          <div className={cn('mx-auto max-w-5xl p-6 md:p-8', className)}>{children}</div>
        </main>
        <footer
          className={cn(
            'w-screen border-t border-gray-200 bg-gray-100 dark:border-gray-900 dark:bg-gray-800',
            className
          )}
        >
          <div className="w-full max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="relative flex flex-col items-center justify-center w-full pt-8 space-y-8 lg:flex-row lg:justify-between lg:space-y-0">
              <Social />
              <span className="flex flex-col items-center justify-center space-y-8 lg:flex-row lg:space-y-0">
                <HomeButton />
                <Nav aria-label="Bottom navigation" />
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center flex-grow-0 py-6 text-xs tracking-tight text-gray-800 dark:text-white sm:py-8">
              <span>&copy; {year}</span>
              <span className="ml-1 font-semibold tracking-wide">Mykhaylo Ryechkin</span>.
              <span className="ml-1 font-normal">All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
