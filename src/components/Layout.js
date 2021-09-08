import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, hideKylo, slug = 'index' }) {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (confetti) setConfetti(false);
  }, [confetti]);

  return (
    <div className="absolute p-1 w-full min-h-screen bg-gradient-to-br dark:from-yellow-300 from-yellow-400 dark:to-cyan-400 to-cyan-500 dark:via-pink-400 via-pink-500 overflow-hidden">
      <div className="min-h-[var(--min-height)] relative flex flex-col justify-between bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900 sm:justify-around">
        <Header />
        <main className="prose md:prose-md lg:prose-lg z-10 w-full max-w-none bg-auto bg-top overflow-hidden sm:bg-left-top">
          <div className="sm:dark:bg-pattern-dark mx-auto px-4 max-w-5xl dark:bg-pattern-dark-sm bg-pattern-light-sm bg-repeat-y bg-fixed bg-origin-padding sm:px-6 sm:bg-pattern-light md:px-8">
            {children}
          </div>
        </main>
        <div className="px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-center w-full">
            <Confetti active={confetti} />
          </div>
          <Footer setConfetti={setConfetti} slug={slug} hideKylo />
        </div>
      </div>
    </div>
  );
}
