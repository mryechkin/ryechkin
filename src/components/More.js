import { forwardRef } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

const More = forwardRef(({ className, onClick }, ref) => {
  return (
    <motion.button
      className={cn('text-3xl text-cyan-600 no-underline dark:text-cyan-300', className)}
      onClick={onClick}
      ref={ref}
      whileFocus={{ scale: 1.1, x: 0 }}
      whileHover={{ scale: 1.1, x: 0 }}
      whileTap={{ scale: 0.9 }}
    >
      &rarr;
    </motion.button>
  );
});

export default More;
