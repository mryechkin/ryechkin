import { BiCalendar } from 'react-icons/bi';
import cn from 'classnames';
import { format, parseISO } from 'date-fns';

export default function DateDisplay({ className, date: dateString, showIcon }) {
  const date = parseISO(dateString);
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center bg-white py-1 dark:bg-transparent',
        className
      )}
    >
      {showIcon && (
        <BiCalendar className="mr-2 h-4 w-4 text-blue-400 dark:text-indigo-300" />
      )}
      <time className="font-semibold text-gray-800 dark:text-white" dateTime={dateString}>
        {format(date, 'LLLL d, yyyy')}
      </time>
    </div>
  );
}
