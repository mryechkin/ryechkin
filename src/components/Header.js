'use client';

import cn from 'classnames/dedupe';
import Link from 'next/link';

import Avatar from './Avatar';
import Menu from './Menu';

export default function Header({ className, setConfetti }) {
  return (
    <header
      className={cn(
        'liquid-glass fixed inset-x-2 top-2 z-40 h-14 w-[calc(100%-1rem)] rounded-lg lg:hidden',
        className,
      )}
    >
      <div className="flex size-full items-center justify-between px-4">
        {/* <Avatar setConfetti={setConfetti} tabIndex="-1" /> */}
        <Link href="/" prefetch={false} className="retro-thin p-2 font-sans text-2xl">
          MISHA.WTF
        </Link>
        <Menu />
      </div>
    </header>
  );
}
