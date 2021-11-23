import cn from 'classnames';

export default function Prose({ className, children }) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className={cn('prose lg:prose-lg mx-auto py-4 w-full', className)}>
        {children}
      </div>
    </div>
  );
}
