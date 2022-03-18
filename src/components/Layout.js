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
    <div className="w-full min-h-screen pt-4 overflow-hidden bg-blue-600">
      <div className="flex items-center justify-center w-full h-4 text-center bg-yellow-300">
        <a
          className="h-4 text-xs font-bold tracking-wider text-blue-600 uppercase"
          href="https://stand-with-ukraine.pp.ua/"
          title="Donate to support Ukraine #StandWithUkraine"
          target="_blank"
          rel="noreferrer"
        >
          #StandWithUkraine
        </a>
      </div>
      <div className="relative flex min-h-[var(--min-height)] flex-col justify-between bg-gray-50 bg-pattern-light bg-left-top bg-repeat bg-origin-content dark:bg-gray-800 dark:bg-pattern-dark">
        <header className="w-screen bg-gradient-to-b from-gray-50 via-gray-50 to-transparent dark:from-gray-800 dark:via-gray-800 dark:to-transparent">
          <div className="flex items-center justify-between w-full max-w-5xl px-4 pt-2 pb-4 mx-auto flex-nowrap sm:px-6 md:px-8">
            <div className="flex items-center justify-between py-2 text-2xl font-bold tracking-tighter sm:py-4 sm:text-4xl">
              <Avatar className="flex mr-6" setConfetti={setHeaderConfetti} />
              <Link href="/">
                <a className="py-2 font-normal text-gray-800 transition-all shadow-underline hover:shadow-link focus:rounded-md dark:text-gray-50">
                  <span className="font-black">Misha</span>.WTF
                </a>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <DarkModeToggle className="mr-2 md:mr-4 lg:hidden" />
              <Menu />
              <DarkModeToggle className="hidden lg:ml-4 lg:block" />
            </div>
          </div>
        </header>
        <div className="flex items-center justify-center w-full">
          <Confetti active={confetti || headerConfetti} config={{ spread: 360 }} />
        </div>
        <main className="w-full overflow-hidden max-w-none">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 md:px-8">{children}</div>
        </main>
        <Footer
          className="bg-gradient-to-b from-transparent via-gray-50 to-gray-50 dark:from-transparent dark:via-gray-800 dark:to-gray-900"
          slug={slug}
          hideKylo
        />
      </div>
    </div>
  );
}
