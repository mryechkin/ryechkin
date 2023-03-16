import { FaTerminal } from 'react-icons/fa';
import cn from 'classnames/dedupe';

export default function HeroContainer({ className, children, title }) {
  return (
    <div className="border-outline flex flex-col items-center justify-center rounded-md bg-gray-50 shadow-retro dark:bg-gray-800 dark:shadow-retro-dark">
      {title && (
        <div className="flex w-full select-none items-center justify-start bg-indigo-300 p-1 font-mono text-xxs font-bold text-indigo-800 dark:bg-indigo-500 dark:text-indigo-100">
          <FaTerminal aria-hidden="true" className="ml-1 h-3 w-3" />
          <span aria-hidden="true" className="ml-2">
            {title}
          </span>
        </div>
      )}
      <div className={cn('p-4 lg:p-6', className)}>{children}</div>
    </div>
  );
}
