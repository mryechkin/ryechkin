import { HiOutlineDocumentText } from 'react-icons/hi';
import cn from 'classnames';

export default function Caption({ children, className, hideIcon = false }) {
  return (
    <div
      className={cn(
        'flex justify-center items-start text-gray-600 dark:text-gray-200 text-sm',
        className
      )}
    >
      {!hideIcon && (
        <HiOutlineDocumentText className="flex-shrink-0 mr-2 w-4 h-4 dark:text-indigo-300 text-indigo-400" />
      )}
      {children}
    </div>
  );
}
