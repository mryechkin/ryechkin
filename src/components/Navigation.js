import { useState } from 'react';
import { usePress } from 'react-aria';
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
      <span className="flex justify-between items-center">
        <nav className="hidden md:flex justify-center items-center py-2 sm:py-4">
          {navItems.map((nav) => (
            <Link href={nav.href} key={nav.href}>
              <a className="whitespace-nowrap">{nav.label}</a>
            </Link>
          ))}
        </nav>
        <span className="hidden md:block ml-2 md:ml-4">
          <DarkModeToggle />
        </span>
        <motion.button
          className="md:hidden p-2 w-12 h-12"
          whileFocus={{ scale: 1.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          {...openPressProps}
        >
          <MenuIcon />
        </motion.button>
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex fixed top-0 left-0 z-50 flex-col justify-between items-center w-screen h-full bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <nav className="flex flex-col justify-center items-center py-2 sm:py-4">
              {navItems.map((nav) => (
                <Link href={nav.href} key={nav.href}>
                  <a className="whitespace-nowrap">{nav.label}</a>
                </Link>
              ))}
            </nav>
            <DarkModeToggle />
            <motion.button
              className="absolute top-0 right-0 p-2 m-10 w-12 h-12"
              whileFocus={{ scale: 1.1 }}
              whileHover={{ scale: 1.1 }}
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
