'use client';

import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';

import Avatar from './Avatar';
import DarkModeToggle from './DarkModeToggle';
import Menu from './Menu';
import SearchButton from './SearchButton';

const SHOW_THRESHOLD = 80;
const SCROLL_THRESHOLD = 15;

const variants = {
  show: {
    y: 0,
  },
  hide: {
    y: '-2rem',
  },
};

export default function Header({ className, setConfetti }) {
  const { scrollY } = useScroll();
  const [initial, setInitial] = useState(true);
  const [show, setShow] = useState(true);

  useMotionValueEvent(scrollY, 'change', (current) => {
    // initial render, don't hide
    if (initial) {
      setInitial(false);
      return;
    }
    const previous = scrollY.getPrevious();
    const diff = current - previous;

    // If current Y position is less than the visibility + scroll threshold, show the utility bar
    if (current < SHOW_THRESHOLD + SCROLL_THRESHOLD) {
      setShow(true);
    } else if (Math.abs(diff) > SCROLL_THRESHOLD) {
      // If scrolled more than the threshold, set visibility according to scroll direction
      // (hide on scrolling down, show on scrolling up)
      setShow(diff < 0);
    }
  });

  return (
    <motion.header
      className={className}
      initial="show"
      animate={show ? 'show' : 'hide'}
      transition={{ duration: 0.3, type: 'tween' }}
      variants={variants}
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
      <div className="blurred-backdrop w-screen border-b-2 border-slate-200 dark:border-slate-950">
        <div className="mx-auto flex w-full max-w-5xl flex-nowrap items-center justify-between px-4 py-2 md:px-2">
          <div className="flex items-center justify-between gap-2 font-bold tracking-tighter md:grow-0">
            <Avatar setConfetti={setConfetti} tabIndex="-1" />
            <Link
              href="/"
              prefetch={false}
              className="retro-thin hidden p-2 text-3xl md:block"
            >
              MISHA.WTF
            </Link>
          </div>
          <Link href="/" prefetch={false} className="retro-thin p-2 text-2xl md:hidden">
            MISHA.WTF
          </Link>
          <div className="relative flex items-center justify-center">
            <Menu />
            <div className="hidden w-full min-w-[4rem] items-center justify-center gap-6 pl-2 md:flex">
              <SearchButton />
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
