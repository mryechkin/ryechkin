export default function Pill({ children }) {
  return (
    <span className="rounded-full bg-opacity-90 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 p-0.5 text-xs backdrop-blur dark:to-indigo-500">
      <span className="flex items-center justify-center flex-shrink-0 px-4 py-1 font-medium tracking-wider bg-white rounded-full bg-opacity-90 text-sky-600 backdrop-blur dark:bg-black dark:bg-opacity-90 dark:text-cyan-400">
        {children}
      </span>
    </span>
  );
}
