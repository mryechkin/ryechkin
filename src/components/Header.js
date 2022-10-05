import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';

import Avatar from './Avatar';
import DarkModeToggle from './DarkModeToggle';
import Menu from './Menu';

const SHOW_THRESHOLD = 80;
const SCROLL_THRESHOLD = 5;

export default function Header({ setConfetti }) {
  const { scrollY } = useScroll();
  const [initial, setInitial] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      // initial render, don't hide
      if (initial) {
        setInitial(false);
        return;
      }
      const previous = scrollY.getPrevious();
      const diff = latest - previous;
      if (latest < SHOW_THRESHOLD && !show) {
        setShow(true);
      } else if (Math.abs(diff) > SCROLL_THRESHOLD) {
        setShow(diff < 0);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initial, scrollY]);

  return (
    <motion.header
      className="fixed z-10"
      initial="show"
      transition={{ duration: 0.3, type: 'tween' }}
      variants={{
        show: {
          y: 0,
        },
        hide: {
          y: '-2rem',
        },
      }}
      animate={show ? 'show' : 'hide'}
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
            <Link href="/" prefetch={false}>
              <a className="hidden p-2 text-xl font-normal uppercase text-gray-800 dark:text-gray-50 md:block">
                <span className="mr-1 font-black">Mykhaylo</span>Ryechkin
              </a>
            </Link>
          </div>
          <Link href="/" prefetch={false}>
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
  );
}
