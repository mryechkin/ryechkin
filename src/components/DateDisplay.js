import { format } from 'date-fns';

export default function DateDisplay({ date: dateString }) {
  const date = new Date(Date.parse(dateString));
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
