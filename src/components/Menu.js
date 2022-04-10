import { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { MenuAlt4Icon, XCircleIcon } from '@heroicons/react/outline';
import cn from 'classnames/dedupe';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import DarkModeToggle from './DarkModeToggle';
import Social from './Social';

const links = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

export function Nav({ className, ariaLabel = 'Navigation' }) {
  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        'flex items-center justify-center lg:flex lg:flex-row lg:space-x-2',
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
  const { theme } = useTheme();

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
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        placement="right"
        size="full"
        isFullHeight
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" mt="10" mr="4">
            <XCircleIcon className="w-8 h-8 text-rose-400" aria-hidden="true" />
          </DrawerCloseButton>
          <DrawerBody bg={theme === 'light' ? 'gray.100' : 'gray.800'}>
            <div className="flex flex-col items-center justify-center flex-1 h-full gap-8 text-xl sm:gap-12 md:gap-14">
              <Link href="/">
                <a className="p-2 text-xl font-normal text-gray-800 uppercase rounded-md dark:text-gray-50">
                  <span className="font-black">Misha</span>.WTF
                </a>
              </Link>
              <Image
                src="/assets/avatar.jpg"
                width={56}
                height={56}
                className="rounded-full"
                aria-hidden
              />
              <Nav className="flex-col text-base lg:flex-col" />
              <Social />
              <DarkModeToggle />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Nav className="hidden text-xl" />
    </>
  );
}
