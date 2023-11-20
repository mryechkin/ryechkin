import cn from 'classnames/dedupe';

import Pill from './Pill';

export default function Tags({ className, list }) {
  if (list && list.length) {
    return (
      <div
        className={cn(
          'flex flex-wrap items-center justify-start gap-2 sm:flex-nowrap',
          className,
        )}
      >
        {list.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </div>
    );
  }
  return null;
}
