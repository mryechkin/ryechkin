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
        'custom-focus-offset flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full focus:rounded-full lg:h-14 lg:w-14',
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
