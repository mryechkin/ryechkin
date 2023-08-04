import { Popover } from '@headlessui/react';
import { MenuAlt4Icon, XCircleIcon } from '@heroicons/react/outline';
import cn from 'classnames/dedupe';
import Link from 'next/link';

import DarkModeToggle from './DarkModeToggle';
import HeroContainer from './HeroContainer';

const links = [
  { name: 'Blog', href: '/blog' },
  { name: 'Videos', href: '/videos' },
  { name: 'About', href: '/about' },
];

export function Nav({ ariaLabel = 'Navigation', className }) {
  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        'flex items-center justify-center md:flex md:flex-row md:space-x-2',
        className,
      )}
    >
      {links.map((item) => (
        <div key={item.name} className="flex w-full px-5 py-2">
          <Link
            href={item.href}
            prefetch={false}
            className="nav-link w-full text-center !font-semibold uppercase"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default function Menu() {
  return (
    <Popover className="relative">
      <Popover.Button className="custom-focus block p-2 md:hidden" aria-label="Menu">
        {({ open }) =>
          open ? (
            <XCircleIcon className="h-8 w-8 text-rose-400" />
          ) : (
            <MenuAlt4Icon className="h-8 w-8 text-sky-300" />
          )
        }
      </Popover.Button>
      <Popover.Panel className="absolute right-0 mr-1">
        <HeroContainer>
          <div className="flex h-full flex-1 flex-col items-center justify-center gap-8">
            <Nav className="flex-col text-base md:flex-col" />
            <DarkModeToggle />
          </div>
        </HeroContainer>
      </Popover.Panel>
      <Nav className="hidden text-xl" />
    </Popover>
  );
}
