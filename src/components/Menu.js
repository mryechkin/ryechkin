import { useState } from 'react';
import { MenuAlt4Icon } from '@heroicons/react/outline';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import DarkModeToggle from './DarkModeToggle';
import SlideOver from './SlideOver';
import Social from './Social';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

export function Nav({ className, ariaLabel = 'Navigation' }) {
  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        'flex items-center justify-center lg:flex lg:flex-row lg:space-x-4',
        className
      )}
    >
      {links.map((item) => (
        <div key={item.name} className="flex w-full px-5 py-2">
          <Link href={item.href}>
            <a className="w-full text-center nav-link">{item.name}</a>
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.button
        className="block p-2 custom-focus lg:hidden"
        type="button"
        aria-label="Menu"
        whileFocus={{ scale: 1.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuAlt4Icon className="w-8 h-8 text-sky-300" />
      </motion.button>
      <SlideOver className="lg:hidden" open={isOpen} setOpen={setIsOpen}>
        <div className="flex flex-col items-center justify-between flex-1 h-full">
          <div className="font-light tracking-wider text-gray-700 uppercase dark:text-gray-300">
            <span className="font-extrabold">Misha</span>.WTF
          </div>
          <Image
            src="/assets/avatar.jpg"
            width={56}
            height={56}
            className="rounded-full"
            aria-hidden
          />
          <Nav className="flex-col lg:flex-col" />
          <Social />
          <DarkModeToggle />
        </div>
      </SlideOver>
      <Nav className="hidden" />
    </>
  );
}
