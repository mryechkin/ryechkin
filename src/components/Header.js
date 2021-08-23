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
      <span className="flex items-center justify-between text-xl font-bold tracking-tighter sm:text-4xl">
        <span className="inline-flex mr-4 border-cyan-400">
          <Image
            src="/assets/avatar.jpg"
            width={48}
            height={48}
            alt="Avatar"
            className="w-12 h-12 border-4 border-cyan-400 rounded-full"
          />
        </span>
        <span className="retro">Misha.WTF</span>
      </span>
      <span className="flex items-center justify-between">
        <nav className="flex items-center justify-center">
          {navItems.map((nav) => (
            <Link href={nav.href} key={nav.href}>
              <a>{nav.label}</a>
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
