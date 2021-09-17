import { format } from 'date-fns';

export default function DateDisplay({ date: dateString }) {
  const date = new Date(Date.parse(dateString));
  return (
    <time className="font-mono" dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
}
