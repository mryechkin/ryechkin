import { useState } from 'react';
import { MenuAlt4Icon, XCircleIcon } from '@heroicons/react/outline';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from 'wtf-design-system';

export const Nav = ({ className, ariaLabel = 'Navigation' }) => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        'flex lg:flex lg:flex-row lg:space-x-4 items-center justify-center',
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
            className="custom-focus block p-2 lg:hidden"
            type="button"
            aria-label="Menu"
            whileFocus={{ scale: 1.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence>
              {!isOpen && <MenuAlt4Icon className="w-8 h-8 text-sky-accent" />}
              {isOpen && (
                <XCircleIcon className="w-8 h-8 dark:text-rose-400 text-rose-500" />
              )}
            </AnimatePresence>
          </motion.button>
        </PopoverTrigger>
        <PopoverContent
          css={{
            backgroundColor: '$slate3',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '$40',
            padding: '$8',
          }}
        >
          <Nav className="flex-col space-y-4 lg:flex-row" />
        </PopoverContent>
      </Popover>
      <Nav className="hidden" />
    </>
  );
}
