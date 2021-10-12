import { useState } from 'react';
import { usePress } from 'react-aria';
import { FaHeadphones } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import { trackRickRoll } from '@/lib/analytics';
import { useHits } from '@/lib/hooks';

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
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        <motion.span className="inline-flex" layout>
          {!rickrolled && (
            <motion.button
              aria-label="Headphones"
              className="custom-focus p-2 rounded"
              whileFocus={{ scale: 1.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              {...headphonesPressProps}
            >
              <FaHeadphones className="w-4 h-4 dark:text-cyan-300 text-cyan-400" />
            </motion.button>
          )}
          {rickrolled && (
            <motion.button
              className="p-2 rounded cursor-pointer"
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
    </AnimateSharedLayout>
  );
}
