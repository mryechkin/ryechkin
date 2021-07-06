/* eslint-disable no-console */
import { useState } from 'react';
import { FaHeadphones } from 'react-icons/fa';
import { FiSmile } from 'react-icons/fi';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

const variants = {
  rotate: {
    rotate: [0, 360],
    transition: { duration: 1, repeat: Infinity, ease: 'linear' },
  },
  stop: { rotate: [0, 0] },
};

export default function RickRoll() {
  const [spinning, setSpinning] = useState(false);
  const [rickrolled, setRickRolled] = useState(false);

  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        <motion.span className="inline-flex ml-1" layout>
          {!rickrolled && (
            <motion.button
              onClick={() => {
                console.log('Sorry :)');
                setSpinning(true);
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaHeadphones className="dark:text-indigo-300 text-indigo-400" />
            </motion.button>
          )}
          {rickrolled && (
            <motion.button
              onClick={() => {
                setSpinning(!spinning);
              }}
              animate={spinning ? 'rotate' : 'stop'}
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* <HiHeart className="dark:text-red-400 text-red-600" /> */}
              <FiSmile className="dark:text-cyan-200 text-cyan-500" />
            </motion.button>
          )}
        </motion.span>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
