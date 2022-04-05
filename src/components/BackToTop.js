import { useEffect, useState } from 'react';
import { usePress } from 'react-aria';
import { BiUpArrowCircle } from 'react-icons/bi';
import cn from 'classnames';
import { motion } from 'framer-motion';

export default function BackToTop({ className }) {
  const [mounted, setMounted] = useState(false);
  const { pressProps } = usePress({
    onPress: () => window.scrollTo(0, 0),
  });

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-rose-400 dark:text-indigo-500">
      <motion.button
        aria-label="Back to top"
        type="button"
        className={cn(
          'custom-focus flex flex-col items-center justify-center gap-2 rounded p-2',
          className
        )}
        whileFocus={{ scale: 1.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        {...pressProps}
      >
        <BiUpArrowCircle className="w-6 h-6" />
      </motion.button>
      <span aria-hidden="true" className="font-black tracking-widest uppercase text-xxs">
        Back to top
      </span>
    </div>
  );
}
