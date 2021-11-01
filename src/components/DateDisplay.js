import { BiCalendar } from 'react-icons/bi';
import cn from 'classnames';
import { format, parseISO } from 'date-fns';

export default function DateDisplay({ className, date: dateString, showIcon }) {
  const date = parseISO(dateString);
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center dark:bg-transparent bg-white',
        className
      )}
    >
      {showIcon && (
        <BiCalendar className="mr-2 w-6 h-6 text-blue-400 dark:text-indigo-300" />
      )}
      <time
        className="text-gray-800 dark:text-white font-mono font-semibold"
        dateTime={dateString}
      >
        {format(date, 'LLLL d, yyyy')}
      </time>
    </div>
  );
}
