import cn from 'classnames/dedupe';

export default function Stack({ children, className, row }) {
  return (
    <div
      className={cn(
        'flex items-center justify-start gap-4',
        row ? 'flex-row' : 'flex-col',
        className,
      )}
    >
      {children}
    </div>
  );
}
