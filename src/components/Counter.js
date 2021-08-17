/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import cn from 'classnames/dedupe';

import { useHits } from '@/lib/hooks';

export default function Counter({ className, slug = 'index' }) {
  const { data, init, increment } = useHits(slug);
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    if (init && process.env.NEXT_PUBLIC_APP_ENV === 'production') increment();
  }, [init]);

  return (
    <button
      type="button"
      className={cn({
        'rounded-full border-cyan-400 border-2 border-opacity-25 text-opacity-50 text-cyan-400 dark:border-cyan-500 dark:border-opacity-25 dark:text-opacity-50 dark:text-cyan-500 px-4 py-2 text-xs font-semibold tracking-widest': true,
        'dark:bg-gray-900 bg-cyan-50 border-opacity-50 dark:border-opacity-50 text-opacity-100 dark:text-opacity-100':
          toggled,
        className,
      })}
      onClick={() => setToggled(!toggled)}
    >
      {String(data?.count || 0).padStart(5, '0')}
    </button>
  );
}
