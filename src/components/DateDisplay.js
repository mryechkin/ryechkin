import cn from 'classnames/dedupe';
import { format, parseISO } from 'date-fns';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { IoMdBook } from 'react-icons/io';
import { MdOutlineCameraRoll } from 'react-icons/md';

export default function DateDisplay({ className, data, isExternal }) {
  const { date, duration, modified, readingTime } = data;
  const dateISO = parseISO(date);
  const modifiedDate = parseISO(modified);

  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-2 whitespace-nowrap',
        className,
      )}
    >
      <time className="inline-flex justify-center py-1 font-semibold" dateTime={date}>
        {format(dateISO, 'LLLL d, yyyy')}
      </time>
      {modified && (
        <span className="italic">
          (updated{' '}
          <time className="font-semibold">{format(modifiedDate, 'LLLL d, yyyy')}</time>)
        </span>
      )}
      {readingTime && (
        <div className="flex items-center justify-center gap-2">
          <IoMdBook className="h-6 w-6 font-light text-indigo-600 dark:text-indigo-400" />
          {readingTime}
        </div>
      )}
      {duration && (
        <div className="flex items-center justify-center gap-2">
          <MdOutlineCameraRoll className="h-6 w-6 font-light text-indigo-600 dark:text-indigo-400" />
          {duration}
        </div>
      )}
      {isExternal && (
        <HiOutlineExternalLink className="h-6 w-6 font-light text-indigo-600 dark:text-indigo-400" />
      )}
    </div>
  );
}
