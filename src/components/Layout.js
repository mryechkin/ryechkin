'use client';

import { Card } from '@wtf-ds/core';
import cn from 'classnames/dedupe';
import Link from 'next/link';
import Confetti from 'react-dom-confetti';

import useTimedToggle from 'src/hooks/useTimedToggle';

import Header from './Header';
import { Nav } from './Menu';
import Social from './Social';

const GridBackground = () => (
  <div className="fixed top-0 z-20 h-dvh w-full bg-slate-50/90 bg-pattern-light bg-left-top bg-repeat bg-origin-content dark:bg-slate-900/90 dark:bg-pattern-dark" />
);

export default function Layout({ children, className, showHomeButton = false }) {
  const [confetti, setConfetti] = useTimedToggle(false, 0);
  const year = new Date().getFullYear();

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden">
      <GridBackground />
      <Header className="fixed z-40" setConfetti={setConfetti} />
      <div className="fixed top-12 z-30 flex w-full items-center justify-center">
        <Confetti
          active={confetti}
          config={{ colors: ['#2563eb', '#fde047'], spread: 360 }}
        />
      </div>
      <main className="z-30 mt-24 w-full max-w-none overflow-hidden">
        <div className={cn('mx-auto max-w-5xl p-6 md:p-8', className)}>
          {children}
          {showHomeButton && (
            <div className="text-center">
              <Card className="prose inline-block p-4">
                <Link href="/">
                  Go <b>Home</b>
                </Link>
              </Card>
            </div>
          )}
        </div>
      </main>
      <footer
        className={cn(
          'blurred-backdrop z-40 mx-auto w-screen max-w-none border-t border-slate-200 dark:border-slate-900',
        )}
      >
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative mt-4 flex w-full flex-col items-center justify-center gap-y-4 sm:flex-row sm:justify-between">
            <Social />
            <Nav className="text-sm" aria-label="Bottom navigation" />
          </div>
          <div className="flex grow-0 flex-wrap items-center justify-center py-6 text-xs tracking-tight text-slate-800 dark:text-white sm:py-8">
            <span>&copy; {year}</span>
            <span className="ml-1 font-semibold tracking-wide">Mykhaylo Ryechkin</span>.
            <span className="ml-1 font-normal">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
