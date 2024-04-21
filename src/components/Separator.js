import cn from 'classnames/dedupe';

export default function Separator({ className }) {
  return (
    <div
      className={cn(
        className,
        'aria-hidden my-2 flex h-full w-full select-none items-center justify-center sm:my-4',
      )}
    >
      <div className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-6xl text-transparent dark:from-yellow-300 dark:to-blue-400">
        &middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;
      </div>
    </div>
  );
}
