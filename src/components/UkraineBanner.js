'use client';

import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const SHOW_THRESHOLD = 80;
const SCROLL_THRESHOLD = 15;

const variants = {
  show: { y: 0 },
  hide: { y: '-100%' },
};

// Scroll-aware #StandWithUkraine flag strip (hides on scroll down, shows on scroll up)
export default function UkraineBanner({ className }) {
  const { scrollY } = useScroll();
  const [initial, setInitial] = useState(true);
  const [show, setShow] = useState(true);

  useMotionValueEvent(scrollY, 'change', (current) => {
    if (initial) {
      setInitial(false);
      return;
    }
    const diff = current - scrollY.getPrevious();

    if (current < SHOW_THRESHOLD + SCROLL_THRESHOLD) {
      setShow(true);
    } else if (Math.abs(diff) > SCROLL_THRESHOLD) {
      setShow(diff < 0);
    }
  });

  return (
    <motion.div
      className={className}
      initial="show"
      animate={show ? 'show' : 'hide'}
      transition={{ duration: 0.3, type: 'tween' }}
      variants={variants}
    >
      <div className="h-4 w-full bg-blue-600" />
      <div className="flex h-4 w-full items-center justify-center bg-yellow-300 text-center">
        <a
          className="h-4 font-mono text-sm font-bold uppercase tracking-wide text-blue-600"
          href="https://war.ukraine.ua/"
          title="Donate to support Ukraine #StandWithUkraine"
          target="_blank"
          rel="noreferrer"
        >
          #StandWithUkraine
        </a>
      </div>
    </motion.div>
  );
}
