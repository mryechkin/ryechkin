import { HiOutlineDocumentText } from 'react-icons/hi';
import cn from 'classnames';

export default function Caption({ children, className, hideIcon = false }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center text-sm text-gray-600 dark:text-gray-200',
        className
      )}
    >
      {!hideIcon && (
        <HiOutlineDocumentText className="mr-2 h-4 w-4 shrink-0 text-indigo-400 dark:text-indigo-300" />
      )}
      {children}
    </div>
  );
}
