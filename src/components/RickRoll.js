import { useState } from 'react';
import { FaHeadphones } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import { useHits } from '@/lib/hooks';

export default function RickRoll() {
  const [rickrolled, setRickRolled] = useState(false);
  const { increment } = useHits('rickroll');

  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        <motion.span className="inline-flex" layout>
          {!rickrolled && (
            <motion.button
              aria-label="Headphones"
              className="p-2"
              onClick={() => {
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                increment();
                setRickRolled(true);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.25 }}
            >
              <FaHeadphones className="text-blue-400 dark:text-rose-400" />
            </motion.button>
          )}
          {rickrolled && (
            <motion.button
              className="p-2 cursor-default"
              animate={{
                scale: [1, 1.25, 1, 0.9],
                transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <HiHeart className="text-blue-400 dark:text-rose-400" />
            </motion.button>
          )}
        </motion.span>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
