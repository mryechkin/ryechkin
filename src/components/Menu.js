import { useState } from 'react';
import { MenuAlt4Icon, XCircleIcon } from '@heroicons/react/outline';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from 'wtf-design-system';

export const Nav = ({ className, ariaLabel = 'Navigation' }) => {
  const links = [
    { name: 'Home', href: '/' },
    // { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        'flex md:flex md:flex-row md:space-x-4 items-center justify-center',
        className
      )}
    >
      {links.map((item) => (
        <div key={item.name} className="flex px-5 py-2 w-full">
          <Link href={item.href}>
            <a className="nav-link w-full text-center">{item.name}</a>
          </Link>
        </div>
      ))}
      {/* <Link href="/">
        <a className="w-full text-center">Home</a>
      </Link>
      <Link href="/blog">
        <a className="w-full text-center">Blog</a>
      </Link>
      <Link href="/about">
        <a className="w-full text-center">About</a>
      </Link> */}
    </nav>
  );
};

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Popover onOpenChange={(open) => setIsOpen(open)}>
        <PopoverTrigger asChild>
          <motion.button
            className="custom-focus block p-2 md:hidden"
            type="button"
            aria-label="Menu"
            whileFocus={{ scale: 1.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence>
              {!isOpen && (
                <MenuAlt4Icon className="w-8 h-8 dark:text-cyan-300 text-cyan-400" />
              )}
              {isOpen && (
                <XCircleIcon className="w-8 h-8 dark:text-rose-400 text-rose-500" />
              )}
            </AnimatePresence>
          </motion.button>
        </PopoverTrigger>
        <PopoverContent
          sideOffset={5}
          css={{
            backgroundColor: '$slate1',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '$40',
            padding: '$8',
          }}
        >
          <Nav className="flex-col space-y-4 md:flex-row" />
        </PopoverContent>
      </Popover>
      <Nav className="hidden" />
    </>
  );
}
