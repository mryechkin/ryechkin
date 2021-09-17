import Confetti from 'react-dom-confetti';
import Link from 'next/link';

import Avatar from '@/components/Avatar';
import DarkModeToggle from '@/components/DarkModeToggle';
import Footer from '@/components/Footer';
import { useConfetti } from '@/lib/hooks';

export default function Layout({ children, confetti = false, slug = 'index' }) {
  const [headerConfetti, setHeaderConfetti] = useConfetti();

  return (
    <div className="pt-2 w-full min-h-screen bg-gradient-to-br dark:from-yellow-300 from-yellow-400 dark:to-cyan-400 to-cyan-500 dark:via-pink-400 via-pink-500 overflow-hidden">
      <div className="min-h-[var(--min-height)] relative flex flex-col justify-between bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900 sm:justify-around">
        <header className="flex flex-nowrap items-center justify-between mx-auto pb-4 pt-2 px-4 w-full max-w-5xl sm:px-6 md:px-8">
          <div className="flex items-center justify-between py-2 text-2xl font-bold tracking-tighter sm:py-4 sm:text-4xl">
            <Avatar className="flex mr-6" setConfetti={setHeaderConfetti} />
            <Link href="/">
              <a className="dark:hover:shadow-link py-2 dark:text-gray-50 text-gray-800 font-normal focus:rounded-md hover:shadow-link shadow-underline dark:shadow-underline-dark transition-all">
                <span className="font-black">Misha</span>.WTF
              </a>
            </Link>
          </div>
          <DarkModeToggle />
        </header>
        <div className="flex items-center justify-center w-full">
          <Confetti active={confetti || headerConfetti} config={{ spread: 360 }} />
        </div>
        <main className="w-full max-w-none overflow-hidden">
          <div className="sm:dark:bg-pattern-dark mx-auto px-4 max-w-5xl sm:px-6 sm:bg-pattern-light sm:bg-left-top sm:bg-no-repeat sm:bg-origin-content md:px-8">
            {children}
          </div>
        </main>
        <Footer slug={slug} hideKylo />
      </div>
    </div>
  );
}
