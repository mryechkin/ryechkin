/* eslint-disable no-console */
import { useState } from 'react';
import { FaHeadphones } from 'react-icons/fa';
// import { FiSmile } from 'react-icons/fi';
import { HiHeart } from 'react-icons/hi';
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
              aria-label="Headphones"
              onClick={() => {
                console.log('Sorry :)');
                // setSpinning(true);
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                setRickRolled(true);
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
              <FaHeadphones className="text-blue-400 dark:text-rose-400" />
            </motion.button>
          )}
          {rickrolled && (
            <motion.button
              // onClick={() => {
              //   setSpinning(!spinning);
              // }}
              animate={spinning ? 'rotate' : 'stop'}
              variants={variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiHeart className="dark:text-rose-400 text-rose-500" />
              {/* <FiSmile className="text-blue-400 dark:text-rose-400" /> */}
            </motion.button>
          )}
        </motion.span>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
