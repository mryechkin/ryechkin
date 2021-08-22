import { useState } from 'react';
import { usePress } from 'react-aria';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const variants = {
  rotate: {
    rotate: [0, 360],
    transition: { duration: 1.2, repeat: Infinity, ease: 'linear' },
  },
  stop: { x: [0, 0] },
};

export default function KyloRen() {
  const [spinning, setSpinning] = useState(false);
  const { theme } = useTheme();
  const { pressProps } = usePress({
    onPress: () => setSpinning(!spinning),
  });

  return (
    <>
      <motion.button
        aria-label="Kylo Ren"
        id="kylo-ren"
        type="button"
        className="flex items-center justify-center p-1 w-16 rounded-full cursor-pointer select-none"
        animate={spinning ? 'rotate' : 'stop'}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        {...pressProps}
      >
        {theme === 'light' ? (
          <Image src="/assets/kyloren.svg" height="64" width="64" alt="Kylo Ren" />
        ) : (
          <Image
            src="/assets/kyloren-inverse.svg"
            height="64"
            width="64"
            alt="Kylo Ren"
          />
        )}
      </motion.button>
    </>
  );
}
