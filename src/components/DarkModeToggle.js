import { useEffect, useState } from 'react';
import { usePress } from 'react-aria';
import { CgSun } from 'react-icons/cg';
import { IoMoon } from 'react-icons/io5';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function DarkModeToggle({ className }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { pressProps } = usePress({
    onPress: () => setTheme(theme === 'light' ? 'dark' : 'light'),
  });

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const ariaLabel = `Toggle ${theme} mode`;

  return (
    <motion.button
      aria-label={ariaLabel}
      type="button"
      className={cn('custom-focus rounded p-2', className)}
      whileFocus={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...pressProps}
    >
      {theme === 'light' ? (
        <CgSun className="w-6 h-6 text-rose-400" />
      ) : (
        <IoMoon className="w-6 h-6 text-indigo-500" />
      )}
    </motion.button>
  );
}
