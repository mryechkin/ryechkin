import { Fragment, useState } from 'react';
import { usePress } from 'react-aria';
import { Dialog, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Link from 'next/link';

import DarkModeToggle from './DarkModeToggle';

const navItems = [
  {
    label: 'About Me',
    href: '/about',
  },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { pressProps: openPressProps } = usePress({
    onPress: () => {
      setOpen(true);
    },
  });
  const { pressProps: closePressProps } = usePress({
    onPress: () => {
      setOpen(false);
    },
  });

  return (
    <AnimateSharedLayout>
      <span className="flex items-center justify-between">
        <nav className="hidden items-center justify-center py-2 sm:py-4 md:flex">
          {navItems.map((nav) => (
            <Link href={nav.href} key={nav.href}>
              <a className="whitespace-nowrap">{nav.label}</a>
            </Link>
          ))}
        </nav>
        <span className="hidden ml-2 md:block md:ml-4">
          <DarkModeToggle />
        </span>
        <motion.button
          className="p-2 w-12 h-12 md:hidden"
          whileFocus={{ scale: 1.2 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          {...openPressProps}
        >
          <MenuIcon />
        </motion.button>
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed z-50 left-0 top-0 flex flex-col items-center justify-between w-screen h-full bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <nav className="flex flex-col items-center justify-center py-2 sm:py-4">
              {navItems.map((nav) => (
                <Link href={nav.href} key={nav.href}>
                  <a className="whitespace-nowrap">{nav.label}</a>
                </Link>
              ))}
            </nav>
            <DarkModeToggle />
            <motion.button
              className="absolute right-0 top-0 m-10 p-2 w-12 h-12"
              whileFocus={{ scale: 1.2 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              {...closePressProps}
            >
              <XIcon />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
