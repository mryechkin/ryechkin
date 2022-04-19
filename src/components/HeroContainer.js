import { FaTerminal } from 'react-icons/fa';
import cn from 'classnames/dedupe';

export default function HeroContainer({ className, children, title }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 border-2 border-indigo-300 rounded-md retro-shadow bg-opacity-5 backdrop-blur-sm dark:border-indigo-500 dark:bg-gray-800 dark:bg-opacity-5">
      {title && (
        <div className="flex items-center justify-start w-full p-1 font-mono font-bold text-indigo-800 bg-indigo-300 select-none text-xxs dark:bg-indigo-500 dark:text-indigo-100">
          <FaTerminal aria-hidden="true" className="w-3 h-3 ml-1" />
          <span aria-hidden="true" className="ml-2">
            {title}
          </span>
        </div>
      )}
      <div className={cn('p-4 lg:p-6', className)}>{children}</div>
    </div>
  );
}
