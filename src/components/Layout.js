'use client';

import cn from 'classnames/dedupe';
import Link from 'next/link';
import Confetti from 'react-dom-confetti';

import useTimedToggle from 'src/hooks/useTimedToggle';

import Card from './Card';
import Header from './Header';
import Sidebar from './Sidebar';
import VexCircles from './VexCircles';

const GridBackground = () => (
  <div className="fixed top-0 z-20 h-dvh w-full bg-slate-50/70 bg-pattern-light bg-left-top bg-repeat bg-origin-content dark:bg-slate-900/70 dark:bg-pattern-dark" />
);

export default function Layout({ children, className, showHomeButton = false }) {
  const [confetti, setConfetti] = useTimedToggle(false, 0);
  const year = new Date().getFullYear();

  return (
    <div className="relative min-h-screen w-full overflow-x-clip">
      <GridBackground />
      <VexCircles className="fixed left-0 top-0 z-20 hidden h-dvh w-[26rem] text-slate-500 opacity-40 dark:text-slate-400 dark:opacity-30 lg:block" />
      <Header setConfetti={setConfetti} />
      <Sidebar className="hidden lg:flex" setConfetti={setConfetti} />
      <div className="fixed top-12 z-50 flex w-full items-center justify-center">
        <Confetti
          active={confetti}
          config={{ colors: ['#2563eb', '#fde047'], spread: 360 }}
        />
      </div>
      <div className="relative z-30 flex min-h-screen flex-col justify-between lg:pl-[17rem]">
        <main className="mt-16 w-full lg:mt-4">
          <div className={cn('mx-auto max-w-5xl px-4 py-2 md:p-8', className)}>
            {children}
            {showHomeButton && (
              <div className="text-center">
                <Card className="prose my-4 inline-block p-4">
                  <Link href="/">
                    Go <b>Home</b>
                  </Link>
                </Card>
              </div>
            )}
          </div>
        </main>
        <footer className="flex flex-wrap items-center justify-center px-4 py-6 text-xs tracking-tight text-slate-800 dark:text-white sm:py-8">
          <span>&copy; {year}</span>
          <span className="ml-1 font-semibold tracking-wide">Mykhaylo Ryechkin</span>.
          <span className="ml-1 font-normal">All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
}
