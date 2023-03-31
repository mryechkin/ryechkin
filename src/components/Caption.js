import { HiOutlineDocumentText } from 'react-icons/hi';
import cn from 'classnames';

export default function Caption({ children, className, hideIcon = false }) {
  return (
    <span
      className={cn(
        'mb-10 flex items-center justify-center text-sm text-slate-600 dark:text-slate-200',
        className
      )}
    >
      {!hideIcon && (
        <HiOutlineDocumentText className="mr-2 h-4 w-4 shrink-0 text-indigo-400 dark:text-indigo-300" />
      )}
      {children}
    </span>
  );
}
