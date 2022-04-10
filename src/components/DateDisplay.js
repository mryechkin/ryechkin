import { BiCalendar } from 'react-icons/bi';
import cn from 'classnames/dedupe';
import { format, parseISO } from 'date-fns';

export default function DateDisplay({ className, date: dateString }) {
  const date = parseISO(dateString);
  return (
    <span className="flex items-center justify-center">
      <time
        className={cn(
          'inline-flex justify-center py-1 font-semibold text-gray-700 dark:text-gray-100',
          className
        )}
        dateTime={dateString}
      >
        {format(date, 'LLLL d, yyyy')}
      </time>
      <BiCalendar className="w-4 h-4 ml-2 text-blue-400 dark:text-indigo-300" />
    </span>
  );
}
