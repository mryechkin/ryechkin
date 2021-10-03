import { usePress } from 'react-aria';
import { FaHandPeace } from 'react-icons/fa';
import cn from 'classnames/dedupe';
import { motion } from 'framer-motion';

export default function PeaceSign({ className, innerClassName, setConfetti }) {
  const { pressProps } = usePress({
    onPress: () => setConfetti(true),
  });

  return (
    <motion.button
      aria-label="Hand showing peace sign"
      type="button"
      className={cn('custom-focus rounded', className)}
      whileFocus={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...pressProps}
    >
      <FaHandPeace
        className={cn('dark:text-yellow-300 text-yellow-500 font-bold', innerClassName)}
      />
    </motion.button>
  );
}
