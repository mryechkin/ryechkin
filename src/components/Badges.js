import { usePress } from 'react-aria';
import cn from 'classnames/dedupe';

export default function Badges({ className, data, onClick }) {
  const { pressProps } = usePress({
    onPress: (e) => {
      if (onClick) onClick(e.target?.dataset?.badge);
    },
  });

  if (onClick)
    return (
      <div className={cn('flex flex-wrap items-center justify-center', className)}>
        {data?.map((badge) => (
          <span
            {...pressProps}
            key={badge}
            className={cn({
              'mx-2 inline-flex select-none items-center rounded-full border border-cyan-600 border-opacity-75 bg-cyan-50 px-3 py-0.5 text-sm font-medium text-cyan-600 hover:cursor-pointer focus:outline-none focus:ring focus:ring-cyan-400 dark:border-cyan-300 dark:border-opacity-75 dark:bg-cyan-900 dark:text-cyan-300 dark:focus:ring-cyan-300': true,
            })}
            data-badge={badge}
            role="button"
            tabIndex={0}
          >
            {badge}
          </span>
        ))}
      </div>
    );

  return (
    <div className={cn('flex flex-wrap items-center justify-center', className)}>
      {data?.map((badge) => (
        <span
          key={badge}
          className={cn({
            'mx-2 inline-flex select-none items-center rounded-full border border-cyan-600 border-opacity-75 bg-cyan-50 px-3 py-0.5 text-sm font-medium text-cyan-600 dark:border-cyan-300 dark:border-opacity-75 dark:bg-cyan-900 dark:text-cyan-300': true,
          })}
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
