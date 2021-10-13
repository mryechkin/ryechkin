import { HiOutlineCalendar } from 'react-icons/hi';
import { format } from 'date-fns';

export default function DateDisplay({ date: dateString }) {
  const date = new Date(Date.parse(dateString));
  return (
    <div className="inline-flex items-center justify-center dark:bg-transparent bg-white">
      <HiOutlineCalendar className="mr-2 w-8 h-8 text-blue-400 dark:text-indigo-300" />
      <time
        className="text-gray-800 dark:text-white font-mono font-semibold"
        dateTime={dateString}
      >
        {format(date, 'LLLL d, yyyy')}
      </time>
    </div>
  );
}
