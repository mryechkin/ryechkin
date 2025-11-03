'use client';

// import { useEffect, useState } from 'react';
import cn from 'classnames';
import { BiUpArrowCircle } from 'react-icons/bi';

export default function BackToTop({
  as: Component = 'button',
  children,
  className,
  icon,
  onClick,
  ...rest
}) {
  // const [mounted, setMounted] = useState(false);

  // // When mounted on client, now we can show the UI
  // useEffect(() => setMounted(true), []);

  // if (!mounted) return null;

  return (
    <Component
      className={cn(
        'custom-focus flex flex-col items-center justify-center gap-2 p-4 text-rose-400 dark:text-blue-500',
        className,
      )}
      onClick={typeof onClick === 'function' ? onClick : () => window.scrollTo(0, 0)}
      type="button"
      {...rest}
    >
      {icon || <BiUpArrowCircle className="size-8" />}
      <span
        aria-hidden="true"
        className="font-sans text-xs font-semibold uppercase tracking-wide"
      >
        {children || 'Back to top'}
      </span>
    </Component>
  );
}
