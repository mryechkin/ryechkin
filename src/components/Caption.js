import { HiOutlineDocumentText } from 'react-icons/hi';
import cn from 'classnames';

export default function Caption({ children, className, hideIcon = false }) {
  return (
    <div
      className={cn(
        'flex justify-center items-start text-gray-600 dark:text-gray-200 text-base mt-4 mb-8',
        className
      )}
    >
      {!hideIcon && (
        <HiOutlineDocumentText className="flex-shrink-0 mr-2 mt-1 w-4 h-4 dark:text-indigo-300 text-indigo-400 sm:mt-0 sm:w-6 sm:h-6" />
      )}
      {children}
    </div>
  );
}
