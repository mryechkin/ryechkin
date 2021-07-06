import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const variants = {
  rotate: {
    rotate: [0, 360],
    // x: [0, 165, 0, -165, 0],
    transition: { duration: 1.2, repeat: Infinity, ease: 'linear' },
  },
  stop: { x: [0, 0] },
};

export default function KyloRen({ isDark, onClick }) {
  const [spinning, setSpinning] = useState(false);

  return (
    <>
      <motion.div
        id="kylo-ren"
        className="w-16 cursor-pointer"
        onClick={(e) => {
          setSpinning(!spinning);
          if (onClick) onClick(e);
        }}
        animate={spinning ? 'rotate' : 'stop'}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {!isDark && (
          <Image src="/assets/kyloren3.svg" height="64" width="64" alt="Kylo Ren" />
        )}
        {isDark && (
          <Image
            src="/assets/kyloren3-inverse.svg"
            height="64"
            width="64"
            alt="Kylo Ren"
          />
        )}
      </motion.div>
    </>
  );
}
