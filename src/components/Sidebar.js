import cn from 'classnames/dedupe';
import Link from 'next/link';

import Avatar from './Avatar';
import DarkModeToggle from './DarkModeToggle';
import { Nav } from './Menu';
import SearchButton from './SearchButton';
import Social, { SocialButton } from './Social';

const UkraineIcon = (props) => (
  <svg viewBox="0 0 30 30" {...props}>
    <rect y="5" width="30" height="20" rx="3" fill="#ffd700" />
    <path d="M3 5h24a3 3 0 0 1 3 3v7H0V8a3 3 0 0 1 3-3z" fill="#0057b7" />
  </svg>
);

export default function Sidebar({ className, setConfetti }) {
  return (
    <aside
      className={cn(
        'liquid-glass fixed inset-y-4 left-4 z-40 flex w-60 flex-col justify-between gap-8 rounded-3xl px-6 py-8',
        className,
      )}
    >
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col items-center gap-3">
          <Avatar setConfetti={setConfetti} tabIndex="-1" />
          <Link href="/" prefetch={false} className="retro-thin p-2 font-sans text-3xl">
            MISHA.WTF
          </Link>
        </div>
        <Nav className="text-lg" />
      </div>
      <div className="flex max-h-[20vh] grow flex-col items-center justify-between gap-6">
        <SocialButton
          data={{
            name: '#StandWithUkraine',
            href: 'https://war.ukraine.ua/',
            icon: UkraineIcon,
          }}
        />
        <div className="flex w-full items-center justify-center gap-4">
          <SearchButton />
          <DarkModeToggle />
        </div>
        <Social />
      </div>
    </aside>
  );
}
