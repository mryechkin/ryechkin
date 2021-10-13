/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import cn from 'classnames/dedupe';

import { useHits } from '@/lib/hooks';

export default function Counter({ className, slug = 'index' }) {
  const { data, init, increment } = useHits(slug);

  useEffect(() => {
    if (init && process.env.NEXT_PUBLIC_APP_ENV === 'production') increment();
  }, [init]);

  return (
    <div
      className={cn({
        'rounded-full flex items-center justify-center border-blue-400 border-2 border-opacity-25 text-opacity-80 text-blue-400 dark:border-blue-500 dark:border-opacity-25 dark:text-opacity-80 dark:text-blue-500 px-4 py-2 text-xs font-semibold tracking-widest select-none': true,
        className,
      })}
    >
      <HiOutlineGlobeAlt className="mr-2 w-4 h-4" />
      {String(data?.count || 0).padStart(5, '0')}
    </div>
  );
}
