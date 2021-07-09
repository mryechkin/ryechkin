import { Fragment } from 'react';

export default function Tags({ list }) {
  return (
    <div className="z-10 flex flex-wrap items-center justify-center">
      <span className="accent-no-bg leading-tight">&#123;</span>
      {list?.map((tag, i) => (
        <Fragment key={tag}>
          <span className="accent leading-tight">{tag}</span>
          {i < list.length - 1 && <span className="accent-no-bg leading-tight">,</span>}
        </Fragment>
      ))}
      <span className="accent-no-bg leading-tight">&#125;</span>
    </div>
  );
}
