import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';

import Counter from './Counter';
import Footer from './Footer';

export default function Layout({ children, hideKylo, slug = 'index' }) {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (confetti) setConfetti(false);
  }, [confetti]);

  return (
    <div className="absolute p-1 w-full min-h-screen bg-gradient-to-br dark:from-yellow-300 from-yellow-400 dark:to-cyan-400 to-cyan-500 dark:via-pink-400 via-pink-500 overflow-hidden">
      <div className="min-h-[var(--min-height)] relative flex flex-col justify-between bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900 sm:justify-around">
        <main className="prose md:prose-md lg:prose-lg z-10 px-4 w-full max-w-none dark:bg-pattern-dark bg-pattern-light bg-auto bg-left-top bg-no-repeat overflow-hidden sm:px-6 md:px-8">
          <div className="mx-auto max-w-5xl">{children}</div>
        </main>
        <div className="px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-center pb-1 pt-8 sm:pt-12">
            <Counter slug={slug} />
          </div>
          <div className="flex items-center justify-center w-full">
            <Confetti active={confetti} />
          </div>
          <Footer hideKylo={hideKylo} setConfetti={setConfetti} />
        </div>
      </div>
    </div>
  );
}
