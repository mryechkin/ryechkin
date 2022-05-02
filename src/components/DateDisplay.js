import { IoMdBook } from 'react-icons/io';
import { MdOutlineCameraRoll } from 'react-icons/md';
import cn from 'classnames/dedupe';
import { format, parseISO } from 'date-fns';

export default function DateDisplay({ className, data }) {
  const { date, duration, readingTime } = data;
  const dateISO = parseISO(date);

  return (
    <div className={cn('flex flex-wrap items-center justify-center gap-2', className)}>
      <time className="inline-flex justify-center py-1" dateTime={date}>
        {format(dateISO, 'LLLL d, yyyy')}
      </time>
      {readingTime && (
        <>
          <span className="font-black">&middot;</span>
          <div className="flex items-center justify-center gap-2">
            <IoMdBook className="w-6 h-6 font-light text-indigo-600 dark:text-indigo-400" />
            {readingTime}
          </div>
        </>
      )}
      {duration && (
        <>
          <span className="font-black">&middot;</span>
          <div className="flex items-center justify-center gap-2">
            <MdOutlineCameraRoll className="w-6 h-6 font-light text-indigo-600 dark:text-indigo-400" />
            {duration}
          </div>
        </>
      )}
    </div>
  );
}
