import cn from 'classnames/dedupe';

import { useRickRoll } from '@/lib/hooks';

export default function Counter({ className }) {
  const { data } = useRickRoll();

  return (
    <div
      className={cn(
        'text-cyan-300 dark:text-cyan-500 text-sm font-light tracking-widest',
        className
      )}
    >
      {String(data?.count || 0).padStart(5, '0')}
    </div>
  );
}
