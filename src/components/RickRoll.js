/* eslint-disable no-console */
import { useState } from 'react';
import { FaHeadphones } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

export default function RickRoll() {
  const [rickrolled, setRickRolled] = useState(false);

  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        <motion.span className="inline-flex ml-1" layout>
          {!rickrolled && (
            <motion.button
              className="pr-1"
              onClick={() => {
                console.log('Sorry :)');
                setRickRolled(true);
                setTimeout(() => {
                  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                }, 500);
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                rotate: [0, 360],
                transition: { duration: 0.5, ease: 'easeInOut' },
              }}
            >
              <FaHeadphones className="dark:text-indigo-300 text-indigo-400" />
            </motion.button>
          )}
          {rickrolled && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HiHeart className="dark:text-red-400 text-red-600" />
            </motion.span>
          )}
        </motion.span>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
