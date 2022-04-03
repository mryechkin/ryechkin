import cn from 'classnames';

import Counter from './Counter';
import DarkModeToggle from './DarkModeToggle';
import KyloRen from './KyloRen';
import { Nav } from './Menu';
import Social from './Social';

export default function Footer({ className, hideKylo, setConfetti, slug }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn('w-screen', className)}>
      <div className="w-full max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-8 lg:py-12">
          <Counter slug={slug} />
        </div>
        {!hideKylo && (
          <div className="flex items-center justify-center pt-8 lg:pt-12">
            <KyloRen setConfetti={setConfetti} />
          </div>
        )}
        <div className="flex flex-col items-center justify-center w-full px-2 py-8 space-y-8 lg:flex-row lg:justify-between lg:space-y-0 lg:pt-0">
          <Social />
          <span className="flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-center">
            <Nav className="text-sm lg:mr-4" aria-label="Bottom navigation" />
            <DarkModeToggle className="mt-8 lg:mt-0" />
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center flex-grow-0 py-6 text-xs tracking-tight text-gray-800 border-t border-indigo-100 border-dotted dark:border-indigo-900 dark:text-white sm:mt-8 sm:py-8">
          <span>&copy; {year}</span>
          <span className="ml-1 font-semibold tracking-wide">Mykhaylo Ryechkin</span>.
          <span className="ml-1 font-normal">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
