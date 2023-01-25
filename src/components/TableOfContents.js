import { useMemo } from 'react';
import cn from 'classnames/dedupe';

import Disclosure from './Disclosure';

const TableOfContents = ({ className, headings }) => {
  const memoizedHeadings = useMemo(
    () => (
      <ul
        className={cn(
          'not-prose !mt-0 mb-8 list-none space-y-1 rounded-lg border-t-0 bg-gray-100 p-4 dark:bg-slate-900',
          className
        )}
      >
        {headings.map(
          (heading) =>
            heading.level < 4 && (
              <li
                className={cn({
                  'font-semibold': heading.level === 2,
                  'pl-2': heading.level === 3,
                  'pl-4': heading.level >= 4,
                })}
                key={heading.id}
              >
                <a className="toc-link" href={`#${heading.id}`}>
                  {heading.level >= 3 ? (
                    <span aria-hidden className="mr-2 font-bold">
                      &middot;
                    </span>
                  ) : null}
                  {heading.text}
                </a>
              </li>
            )
        )}
      </ul>
    ),
    [className, headings]
  );

  if (!headings?.length) {
    return null;
  }

  return (
    <Disclosure className="mt-8" title="Table of Contents">
      {memoizedHeadings}
    </Disclosure>
  );
};

export default TableOfContents;
