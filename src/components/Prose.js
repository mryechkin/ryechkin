import cn from 'classnames';

export default function Prose({ className, children }) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className={cn('prose mx-auto w-full py-4 lg:prose-lg', className)}>
        {children}
      </div>
    </div>
  );
}
