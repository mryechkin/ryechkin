import Image from 'next/image';
import Link from 'next/link';

import DarkModeToggle from './DarkModeToggle';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Me',
    href: '/about',
  },
];

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-between p-2 w-full sm:flex-row sm:flex-nowrap sm:py-4">
      <span className="flex items-center justify-between py-4 text-2xl font-bold tracking-tighter sm:text-4xl">
        <span className="inline-flex mr-4 w-8 h-8 sm:w-12 sm:h-12">
          <Image
            src="/assets/avatar.jpg"
            width={48}
            height={48}
            alt="Avatar"
            className="rounded-full"
          />
        </span>
        <span className="retro">Misha.WTF</span>
      </span>
      <span className="flex items-center justify-between">
        <nav className="flex items-center justify-center py-2 sm:py-4">
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
