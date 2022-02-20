import { BiCalendar } from 'react-icons/bi';
import cn from 'classnames';
import { format, parseISO } from 'date-fns';

export default function DateDisplay({ className, date: dateString, showIcon }) {
  const date = parseISO(dateString);
  return (
    <div className={cn('inline-flex justify-center py-1', className)}>
      {showIcon && (
        <BiCalendar className="mr-2 h-4 w-4 text-blue-400 dark:text-indigo-300" />
      )}
      <time
        className="font-normal text-gray-700 dark:text-gray-100"
        dateTime={dateString}
      >
        {format(date, 'LLLL d, yyyy')}
      </time>
    </div>
  );
}
