export default function Pill({ children }) {
  return (
    <span className="rounded-full bg-gradient-to-r from-cyan-400/90 via-sky-400/90 to-blue-400/90 p-0.5 text-xs backdrop-blur dark:to-indigo-500/90">
      <span className="flex shrink-0 items-center justify-center rounded-full bg-white/90 px-4 py-1 font-medium tracking-wider text-sky-600 backdrop-blur dark:bg-black/90 dark:text-cyan-400">
        {children}
      </span>
    </span>
  );
}
