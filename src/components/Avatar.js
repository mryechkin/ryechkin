import { useState } from 'react';
import { usePress } from 'react-aria';
import cn from 'classnames/dedupe';
import { motion } from 'framer-motion';
import Image from 'next/image';

const variants = {
  rotate: {
    rotate: [0, 360],
    transition: { duration: 0.8, repeat: Infinity, ease: 'linear' },
  },
  stop: { x: [0, 0] },
};

export default function Avatar({ className, setConfetti }) {
  const [spinning, setSpinning] = useState(false);
  const { pressProps } = usePress({
    onPress: () => {
      setSpinning(!spinning);
      if (setConfetti) setConfetti(true);
    },
  });

  return (
    <motion.button
      aria-label="Avatar"
      id="avatar"
      type="button"
      className={cn(
        'custom-focus flex items-center justify-center w-8 h-8 sm:w-14 sm:h-14 cursor-pointer select-none rounded',
        className
      )}
      animate={spinning ? 'rotate' : 'stop'}
      variants={variants}
      whileFocus={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...pressProps}
    >
      <Image
        src="/assets/avatar.jpg"
        width={56}
        height={56}
        alt="Avatar"
        className="rounded-full"
      />
    </motion.button>
  );
}
