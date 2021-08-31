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
      <div className={cn('z-10 flex flex-wrap items-center justify-center', className)}>
        {data?.map((badge) => (
          <span
            {...pressProps}
            key={badge}
            className={cn({
              'inline-flex items-center mx-2 px-3 py-0.5 focus:outline-none focus:ring focus:ring-cyan-400 dark:focus:ring-cyan-300 dark:text-cyan-300 text-cyan-600 text-sm font-medium bg-cyan-50 dark:bg-cyan-900 border dark:border-cyan-300 border-cyan-600 border-opacity-75 dark:border-opacity-75 rounded-full hover:cursor-pointer select-none': true,
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
    <div className={cn('z-10 flex flex-wrap items-center justify-center', className)}>
      {data?.map((badge) => (
        <span
          key={badge}
          className={cn({
            'inline-flex items-center mx-2 px-3 py-0.5 dark:text-cyan-300 text-cyan-600 text-sm font-medium bg-cyan-50 dark:bg-cyan-900 border dark:border-cyan-300 border-cyan-600 border-opacity-75 dark:border-opacity-75 rounded-full select-none': true,
          })}
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
