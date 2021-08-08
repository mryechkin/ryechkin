import { useEffect, useState } from 'react';
import { CgSun } from 'react-icons/cg';
import { IoMoon } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const ariaLabel = `Toggle ${theme} mode`;

  return (
    <motion.button
      aria-label={ariaLabel}
      type="button"
      className="p-2"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'light' ? (
        <CgSun className="w-6 h-6 text-rose-400" />
      ) : (
        <IoMoon className="w-6 h-6 text-indigo-500" />
      )}
    </motion.button>
  );
}
