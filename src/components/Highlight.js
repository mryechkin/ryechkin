import cn from 'classnames/dedupe';

export default function Highlight({ children, className }) {
  return (
    <span className="relative inline-block font-bold">
      <span
        aria-hidden="true"
        className={cn('absolute inset-0 z-0 -m-1 -rotate-2 transform', className)}
      />
      <span className="relative">{children}</span>
    </span>
  );
}
