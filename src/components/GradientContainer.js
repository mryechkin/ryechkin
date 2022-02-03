import cn from 'classnames/dedupe';

export default function GradientContainer({ children, className, ...props }) {
  return (
    <div
      className={cn(
        'relative bg-gradient-to-br from-yellow-400 via-pink-500 to-cyan-500 p-1 dark:from-yellow-300 dark:via-pink-400 dark:to-cyan-400',
        className
      )}
    >
      <div
        className="flex flex-col justify-between bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-900 sm:justify-around"
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
