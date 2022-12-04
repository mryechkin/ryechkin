import { useState } from 'react';
import { usePress } from 'react-aria';
import { FaHeadphones } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

import { trackRickRoll } from 'src/lib/analytics';
import { useHits } from 'src/lib/hooks';

export default function RickRoll() {
  const [rickrolled, setRickRolled] = useState(false);
  const { increment } = useHits('rickroll');
  const { pressProps: headphonesPressProps } = usePress({
    onPress: () => {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
      increment();
      trackRickRoll();
      setRickRolled(true);
    },
  });
  const { pressProps: heartPressProps } = usePress({
    onPress: () => setRickRolled(false),
  });

  return (
    <AnimatePresence mode="wait">
      <motion.span className="inline-flex" layout>
        {!rickrolled && (
          <motion.button
            aria-label="Headphones"
            className="custom-focus rounded p-2"
            whileFocus={{ scale: 1.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            {...headphonesPressProps}
          >
            <FaHeadphones className="h-4 w-4 text-cyan-400 dark:text-cyan-300" />
          </motion.button>
        )}
        {rickrolled && (
          <motion.button
            className="cursor-pointer rounded p-2"
            animate={{
              scale: [1, 1.25, 1, 0.9],
              transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
            }}
            {...heartPressProps}
          >
            <HiHeart className="text-red-500 dark:text-rose-400" />
          </motion.button>
        )}
      </motion.span>
    </AnimatePresence>
  );
}
