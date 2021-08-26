import Link from 'next/link';

import DarkModeToggle from './DarkModeToggle';

const navItems = [
  {
    label: 'About Me',
    href: '/about',
  },
];

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-between p-2 px-6 w-full sm:flex-row sm:flex-nowrap sm:px-8 sm:py-4">
      <span className="flex items-center justify-between py-2 text-2xl font-bold tracking-tighter sm:py-4 sm:text-4xl">
        <Link href="/">
          <a className="shadow-thick dark:shadow-thick-dark dark:hover:shadow-link hover:shadow-link py-2 dark:text-gray-50 text-gray-800 focus:rounded-md">
            Misha.WTF
          </a>
        </Link>
      </span>
      <span className="flex items-center justify-between">
        <nav className="flex items-center justify-center py-0 sm:py-4">
          {navItems.map((nav) => (
            <Link href={nav.href} key={nav.href}>
              <a className="whitespace-nowrap">{nav.label}</a>
            </Link>
          ))}
        </nav>
        <span className="hidden ml-2 sm:block sm:ml-4">
          <DarkModeToggle />
        </span>
      </span>
    </div>
  );
}
