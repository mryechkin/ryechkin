import { Popover } from '@headlessui/react';
import { MenuAlt4Icon, XCircleIcon } from '@heroicons/react/outline';
import cn from 'classnames/dedupe';
import Link from 'next/link';

import DarkModeToggle from './DarkModeToggle';
import HeroContainer from './HeroContainer';

const links = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

export function Nav({ className, ariaLabel = 'Navigation' }) {
  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        'flex items-center justify-center md:flex md:flex-row md:space-x-2',
        className
      )}
    >
      {links.map((item) => (
        <div key={item.name} className="flex w-full px-5 py-2">
          <Link href={item.href}>
            <a className="nav-link w-full text-center !font-semibold uppercase">
              {item.name}
            </a>
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default function AppMenu() {
  return (
    <Popover className="relative">
      <Popover.Button className="block p-2 custom-focus md:hidden">
        {({ open }) =>
          open ? (
            <XCircleIcon className="w-8 h-8 text-rose-400" />
          ) : (
            <MenuAlt4Icon className="w-8 h-8 text-sky-300" />
          )
        }
      </Popover.Button>
      <Popover.Panel className="absolute right-0">
        <HeroContainer>
          <div className="flex flex-col items-center justify-center flex-1 h-full gap-8">
            <Link href="/">
              <a className="p-2 text-xl font-normal text-gray-800 uppercase dark:text-gray-50">
                <span className="mr-1 font-black">Mykhaylo</span>Ryechkin
              </a>
            </Link>
            <Nav className="flex-col text-base md:flex-col" />
            <DarkModeToggle />
          </div>
        </HeroContainer>
      </Popover.Panel>
      <Nav className="hidden text-xl" />
    </Popover>
  );
}
