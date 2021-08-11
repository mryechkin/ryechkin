import { Fragment } from 'react';
import cn from 'classnames/dedupe';

export default function Tags({ className, list }) {
  return (
    <div className={cn('z-10 flex flex-wrap items-center justify-center', className)}>
      <span className="accent-no-bg leading-tight">&#123;</span>
      {list?.map((tag, i) => (
        <Fragment key={tag}>
          <span className="accent px-1 font-mono leading-tight">{tag}</span>
          {i < list.length - 1 && <span className="accent-no-bg leading-tight">,</span>}
        </Fragment>
      ))}
      <span className="accent-no-bg leading-tight">&#125;</span>
    </div>
  );
}
