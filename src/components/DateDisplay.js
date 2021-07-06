import { format, parseISO } from 'date-fns';

export default function DateDisplay({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
