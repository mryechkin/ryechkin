import { BiCalendar } from 'react-icons/bi';
import cn from 'classnames';
import { format, parseISO } from 'date-fns';

export default function DateDisplay({ className, date: dateString, showIcon }) {
  const date = parseISO(dateString);
  return (
    <div className={cn('inline-flex justify-center py-1', className)}>
      <time
        className="font-normal text-gray-700 dark:text-gray-100"
        dateTime={dateString}
      >
        {format(date, 'LLLL d, yyyy')}
      </time>
      {showIcon && (
        <BiCalendar className="w-4 h-4 ml-2 text-blue-400 dark:text-indigo-300" />
      )}
    </div>
  );
}
