import cn from 'classnames/dedupe';

export default function GradientContainer({ children, className, ...props }) {
  return (
    <div
      className={cn(
        'relative p-1 bg-gradient-to-br dark:from-yellow-300 from-yellow-400 dark:to-cyan-400 to-cyan-500 dark:via-pink-400 via-pink-500',
        className
      )}
    >
      <div
        className="flex flex-col justify-between bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900 sm:justify-around"
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
