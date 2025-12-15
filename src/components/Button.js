import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const Button = forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <button
      ref={ref}
      type="button"
      className={twMerge(
        'border-outline custom-focus flex items-center justify-center rounded-md p-1 text-sm font-semibold hover:border-sky-400 dark:hover:border-sky-300 sm:p-2',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
