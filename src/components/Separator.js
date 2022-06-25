import cn from 'classnames/dedupe';

export default function Separator({ className }) {
  return (
    <div
      className={cn(
        className,
        'aria-hidden my-2 flex h-full w-full select-none items-center justify-center sm:my-4'
      )}
    >
      <div className="text-4xl text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-500 bg-clip-text dark:from-yellow-300 dark:via-pink-400 dark:to-cyan-400 sm:text-6xl">
        &middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;
      </div>
    </div>
  );
}
