export default function GradientContainer({ children, className, ...props }) {
  return (
    <div className="relative p-1 min-h-screen bg-gradient-to-br dark:from-yellow-300 from-yellow-400 dark:to-cyan-400 to-cyan-500 dark:via-pink-400 via-pink-500 sm:min-h-full">
      <div
        className="min-h-screen bg-gradient-to-br dark:from-gray-700 from-white to-gray-50 dark:to-gray-900 sm:min-h-full"
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
