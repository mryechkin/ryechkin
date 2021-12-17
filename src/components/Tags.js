import cn from 'classnames/dedupe';

import Pill from './Pill';

export default function Tags({ className, list }) {
  if (list && list.length) {
    return (
      <div className={cn('flex flex-wrap items-center justify-start', className)}>
        {list.map((item) => (
          <Pill key={item} css={{ marginBottom: '$2', marginRight: '$2' }}>
            {item}
          </Pill>
        ))}
      </div>
    );
  }
  return null;
}
