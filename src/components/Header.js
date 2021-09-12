import Link from 'next/link';

import Avatar from '@/components/Avatar';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function Header({ setConfetti }) {
  return (
    <div className="flex flex-nowrap items-center justify-between mx-auto p-2 px-4 w-full max-w-5xl sm:px-6 sm:py-4 md:px-8">
      <div className="flex items-center justify-between py-2 text-2xl font-bold tracking-tighter sm:py-4 sm:text-4xl">
        <Link href="/">
          <a className="dark:hover:shadow-link py-2 dark:text-gray-50 text-gray-800 focus:rounded-md hover:shadow-link shadow-thick dark:shadow-thick-dark">
            Misha.WTF
          </a>
        </Link>
        <Avatar className="flex ml-6" setConfetti={setConfetti} />
      </div>
      <DarkModeToggle />
    </div>
  );
}
