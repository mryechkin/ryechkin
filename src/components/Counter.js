/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import cn from 'classnames/dedupe';

import { useHits } from '@/lib/hooks';

export default function Counter({ className, slug = 'index' }) {
  const { data, increment } = useHits(slug);

  useEffect(() => {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    increment();
  }, [slug]);

  return (
    <div
      className={cn(
        'hover:bg-cyan-50 dark:hover:bg-gray-900 hover:border-opacity-50 dark:hover:text-cyan-400 hover:text-cyan-500 rounded-full border-cyan-400 border-2 border-opacity-25 text-cyan-400 dark:text-cyan-500 px-4 py-2 text-sm font-light tracking-widest',
        className
      )}
    >
      {String(data?.count || 0).padStart(5, '0')}
    </div>
  );
}
