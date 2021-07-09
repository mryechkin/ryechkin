export default function GradientContainer({ children, className, ...props }) {
  return (
    <div className="relative p-1 w-full min-h-screen bg-gradient-to-br dark:from-yellow-300 from-yellow-400 dark:to-cyan-400 to-cyan-500 dark:via-pink-400 via-pink-500 sm:p-2">
      <div
        className="flex flex-col justify-between p-4 min-h-screen bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900 sm:p-8"
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
