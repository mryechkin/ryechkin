'use client';

import { MenuAlt4Icon, XCircleIcon } from '@heroicons/react/outline';
import cn from 'classnames/dedupe';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Button as AriaButton,
  Heading,
  Sheet,
  SheetBackdrop,
  SheetContent,
  SheetOverlay,
  SheetTrigger,
} from 'react-aria-components';

import DarkModeToggle from './DarkModeToggle';
import SearchButton from './SearchButton';
import Social, { SocialButton } from './Social';
import VexCircles from './VexCircles';

const UkraineIcon = (props) => (
  <svg viewBox="0 0 30 30" {...props}>
    <rect y="5" width="30" height="20" rx="3" fill="#ffd700" />
    <path d="M3 5h24a3 3 0 0 1 3 3v7H0V8a3 3 0 0 1 3-3z" fill="#0057b7" />
  </svg>
);

const SHEET_WIDTH = 'w-[min(20rem,85vw)]';

export const links = [
  { name: 'About', href: '/about' },
  { name: 'Writing', href: '/blog' },
  { name: 'Tutorials', href: '/videos' },
  { name: 'Snippets', href: '/snippets' },
];

export function Nav({
  'aria-label': ariaLabel = 'Main navigation',
  className,
  onNavigate,
}) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={ariaLabel}
      className={cn('flex flex-col items-start gap-3', className)}
    >
      {links.map((item) => {
        const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.name}
            href={item.href}
            prefetch={false}
            aria-current={isActive ? 'page' : undefined}
            className={cn('nav-link uppercase tracking-wide', isActive && 'shadow-link')}
            onClick={onNavigate}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default function Menu() {
  return (
    <SheetTrigger>
      <AriaButton className="custom-focus block p-2" aria-label="Open menu">
        <MenuAlt4Icon className="size-8 text-sky-300" />
      </AriaButton>
      <SheetOverlay position="start" className="z-50">
        <SheetBackdrop className="bg-slate-950/40" swipeAnimation="sheet-backdrop" />
        <Sheet
          overscrollPadding
          className={cn(
            // content-box keeps the width intact when overscroll padding is applied
            'liquid-glass box-content h-[calc(100%-1rem)] overflow-clip rounded-r-3xl border-l-0 bg-white/75 backdrop-blur-2xl will-change-transform dark:bg-slate-900/75',
            SHEET_WIDTH,
          )}
        >
          {/* Anchored to the sheet's right edge since overscroll padding extends its left edge */}
          <div
            className={cn('pointer-events-none absolute inset-y-0 right-0', SHEET_WIDTH)}
          >
            <VexCircles className="absolute inset-0 size-full text-slate-500 opacity-30 dark:text-slate-400" />
          </div>
          <SheetContent
            aria-label="Menu"
            className="relative flex h-full flex-col gap-10 overflow-y-auto p-6 outline-none"
          >
            {({ close }) => (
              <>
                <div className="flex items-center justify-between">
                  <Heading slot="title" className="retro-thin font-sans text-3xl">
                    <Link href="/" prefetch={false} onClick={close}>
                      MISHA.WTF
                    </Link>
                  </Heading>
                  <AriaButton
                    slot="close"
                    className="custom-focus rounded-full p-1"
                    aria-label="Close menu"
                  >
                    <XCircleIcon className="size-8 text-rose-400" />
                  </AriaButton>
                </div>
                <Nav className="text-xl" onNavigate={close} />
                <div className="mt-auto flex max-h-[20vh] grow flex-col items-center justify-between gap-6">
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
                  <Social className="-mx-2" itemClassName="mx-0 sm:mx-0" />
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>
      </SheetOverlay>
    </SheetTrigger>
  );
}
