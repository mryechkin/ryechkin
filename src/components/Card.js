import { cloneElement, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const Card = forwardRef(
  (
    {
      actions,
      as: Component = 'div',
      children,
      className,
      icon,
      innerClassName,
      title,
      ...rest
    },
    ref,
  ) => {
    const showHeader = icon || title || actions;

    const Icon = icon
      ? cloneElement(icon, {
          'aria-hidden': 'true',
          className: twMerge(icon.props.className, 'h-4 w-4'),
        })
      : null;

    return (
      <Component
        className={twMerge(
          'border-outline rounded-md bg-slate-50 text-gray-900 shadow-retro dark:bg-slate-900 dark:text-gray-50 dark:shadow-retro-dark',
          className,
        )}
        ref={ref}
        {...rest}
      >
        {showHeader ? (
          <>
            <div className="flex w-full select-none items-center justify-between gap-2 bg-indigo-200 p-1 font-mono text-xs font-medium text-indigo-950 dark:bg-indigo-500 dark:text-indigo-50">
              <div className="flex items-center justify-start gap-2">
                {icon && Icon}
                {title && <span aria-hidden="true">{title}</span>}
              </div>
              {actions}
            </div>
            <div className={twMerge('p-4', innerClassName)}>{children}</div>
          </>
        ) : (
          children
        )}
      </Component>
    );
  },
);

export default Card;
