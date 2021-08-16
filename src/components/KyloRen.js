import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const variants = {
  rotate: {
    rotate: [0, 360],
    // x: [0, 165, 0, -165, 0],
    transition: { duration: 1.2, repeat: Infinity, ease: 'linear' },
  },
  stop: { x: [0, 0] },
};

export default function KyloRen({ onClick }) {
  const [spinning, setSpinning] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <motion.button
        aria-label="Kylo Ren"
        id="kylo-ren"
        type="button"
        className="w-16 cursor-pointer select-none"
        onClick={(e) => {
          setSpinning(!spinning);
          if (onClick) onClick(e);
        }}
        animate={spinning ? 'rotate' : 'stop'}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
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
