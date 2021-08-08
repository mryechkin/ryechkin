import cn from 'classnames/dedupe';

export default function Highlight({ children, className }) {
  return (
    <span className="relative inline-block font-bold">
      <span
        aria-hidden="true"
        className={cn('absolute z-0 inset-0 -m-1 transform -rotate-2', className)}
      />
      <span className="relative">{children}</span>
    </span>
  );
}
