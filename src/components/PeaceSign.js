import cn from 'classnames/dedupe';
import { motion } from 'framer-motion';
import { usePress } from 'react-aria';
import { FaHandPeace } from 'react-icons/fa';

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
        className={cn('font-bold text-yellow-500 dark:text-yellow-300', innerClassName)}
      />
    </motion.button>
  );
}
