/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import cn from 'classnames/dedupe';

import { useHits } from 'src/lib/hooks';

export default function Counter({ className, slug = 'index' }) {
  const { data, increment, init } = useHits(slug);

  useEffect(() => {
    if (init && process.env.NEXT_PUBLIC_APP_ENV === 'production') increment();
  }, [init]);

  return (
    <div
      className={cn({
        'flex select-none items-center justify-center rounded-full border-2 border-blue-400 border-opacity-25 bg-slate-50 bg-opacity-80 px-4 py-2 text-xs font-semibold tracking-widest text-blue-400 text-opacity-80 backdrop-blur dark:border-blue-500 dark:border-opacity-25 dark:bg-slate-900 dark:bg-opacity-80 dark:text-blue-500 dark:text-opacity-80': true,
        className,
      })}
    >
      <HiOutlineGlobeAlt className="mr-2 h-4 w-4" />
      {String(data?.count || 0).padStart(5, '0')}
    </div>
  );
}
