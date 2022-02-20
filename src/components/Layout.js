import Confetti from 'react-dom-confetti';
import Link from 'next/link';

import Avatar from '@/components/Avatar';
import DarkModeToggle from '@/components/DarkModeToggle';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import { useConfetti } from '@/lib/hooks';

export default function Layout({ children, confetti = false, slug = 'index' }) {
  const [headerConfetti, setHeaderConfetti] = useConfetti();

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-r from-yellow-300 via-cyan-400 to-pink-500 pt-2">
      <div className="relative flex min-h-[var(--min-height)] flex-col justify-between bg-gradient-to-br from-white via-indigo-50 to-gray-50 dark:from-gray-800 dark:via-indigo-900 dark:to-gray-900 sm:justify-around">
        <header className="mx-auto flex w-full max-w-5xl flex-nowrap items-center justify-between px-4 pt-2 pb-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between py-2 text-2xl font-bold tracking-tighter sm:py-4 sm:text-4xl">
            <Avatar className="mr-6 flex" setConfetti={setHeaderConfetti} />
            <Link href="/">
              <a className="py-2 font-normal text-gray-800 shadow-underline transition-all hover:shadow-link focus:rounded-md dark:text-gray-50">
                <span className="font-black">Misha</span>.WTF
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <DarkModeToggle className="mr-2 md:mr-4 lg:hidden" />
            <Menu />
            <DarkModeToggle className="hidden lg:ml-4 lg:block" />
          </div>
        </header>
        <div className="flex w-full items-center justify-center">
          <Confetti active={confetti || headerConfetti} config={{ spread: 360 }} />
        </div>
        <main className="w-full max-w-none overflow-hidden">
          <div className="mx-auto max-w-5xl px-4 sm:bg-pattern-light sm:bg-left-top sm:bg-no-repeat sm:bg-origin-content sm:px-6 sm:dark:bg-pattern-dark md:px-8">
            {children}
          </div>
        </main>
        <Footer slug={slug} hideKylo />
      </div>
    </div>
  );
}
