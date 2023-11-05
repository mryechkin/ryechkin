import cn from 'classnames/dedupe';

export function Col({ center, children, className, end, start = true, ...props }) {
  return (
    <div
      className={cn('flex flex-col items-center', className, {
        'justify-start': start,
        'justify-center': center,
        'justify-end': end,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

export function Row({ center, children, end, start = true, ...props }) {
  return (
    <div
      className={cn('flex items-center', {
        'justify-start': start,
        'justify-center': center,
        'justify-end': end,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

export function Show({ children, fallback, when }) {
  return when ? children : fallback;
}

export function Hide({ children, fallback, when }) {
  return when ? fallback : children;
}
