import cn from 'classnames/dedupe';

export default function Separator({ className }) {
  return (
    <div
      className={cn(
        className,
        'aria-hidden flex items-center justify-center w-full my-2 sm:my-4'
      )}
    >
      <div className="rainbow-bg text-transparent text-4xl bg-clip-text sm:text-6xl">
        &middot;&middot;&middot;&middot;&middot;&middot;&middot;
      </div>
    </div>
  );
}
