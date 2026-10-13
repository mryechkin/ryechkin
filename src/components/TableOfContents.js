'use client';

import { useEffect, useMemo, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import cn from 'classnames/dedupe';

// Distance from the viewport top at which a heading counts as the current section
const ACTIVE_OFFSET = 160;

function useActiveHeading(ids) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const passed = ids.filter((id) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= ACTIVE_OFFSET;
      });
      setActiveId(passed.pop() ?? null);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  return activeId;
}

function HeadingList({ activeId, headings, onNavigate }) {
  return (
    <ul className="list-none space-y-0.5 border-l-2 border-slate-200 p-0 font-sans dark:border-slate-700">
      {headings.map((heading) => {
        const isActive = heading.id === activeId;
        return (
          <li key={heading.id} className="m-0 p-0">
            <a
              href={`#${heading.id}`}
              aria-current={isActive ? 'location' : undefined}
              className={cn(
                'toc-link -ml-0.5 block border-l-2 border-transparent py-1 pl-3 text-sm leading-snug text-slate-600 dark:text-slate-300',
                heading.level === 3 && 'pl-6',
                isActive &&
                  'border-sky-400 font-semibold text-slate-900 dark:border-sky-300 dark:text-white',
              )}
              onClick={onNavigate}
            >
              {heading.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * `rail` is a sticky sidebar list for wide screens; `bar` is a sticky collapsible
 * bar that shows the current section on smaller screens.
 */
const TableOfContents = ({ className, headings, variant = 'rail' }) => {
  const visibleHeadings = useMemo(
    () => (headings ?? []).filter((heading) => heading.level < 4),
    [headings],
  );
  const ids = useMemo(() => visibleHeadings.map((h) => h.id), [visibleHeadings]);
  const activeId = useActiveHeading(ids);

  if (!visibleHeadings.length) {
    return null;
  }

  if (variant === 'bar') {
    const activeHeading = visibleHeadings.find((h) => h.id === activeId);

    return (
      <Disclosure
        as="nav"
        aria-label="Table of contents"
        className={cn(
          'toc not-prose border-outline blurred-backdrop sticky top-[calc(var(--header-offset)+0.5rem)] z-20 rounded-md shadow-retro dark:shadow-retro-dark',
          className,
        )}
      >
        {({ open }) => (
          <>
            <DisclosureButton className="custom-focus-inset flex w-full items-center justify-between gap-3 rounded-md px-4 py-2 text-left">
              <div className="flex min-w-0 flex-col">
                <div className="section-label">On this page</div>
                {activeHeading && (
                  <div className="truncate font-sans text-sm font-semibold">
                    {activeHeading.text}
                  </div>
                )}
              </div>
              <ChevronDownIcon
                className={cn(
                  'size-5 shrink-0 transition-transform',
                  open && 'rotate-180',
                )}
              />
            </DisclosureButton>
            <DisclosurePanel className="max-h-[60dvh] overflow-y-auto px-4 pb-3">
              {({ close }) => (
                <HeadingList
                  activeId={activeId}
                  headings={visibleHeadings}
                  onNavigate={() => close()}
                />
              )}
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    );
  }

  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        'toc sticky top-[calc(var(--header-offset)+3rem)] flex max-h-[calc(100dvh-var(--header-offset)-4rem)] flex-col gap-3 overflow-y-auto',
        className,
      )}
    >
      <div className="section-label">On this page</div>
      <HeadingList activeId={activeId} headings={visibleHeadings} />
    </nav>
  );
};

export default TableOfContents;
