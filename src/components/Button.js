import { forwardRef } from 'react';
import { usePress } from 'react-aria';
import cn from 'classnames/dedupe';
import { motion } from 'framer-motion';

const Button = forwardRef((props, ref) => {
  const { children, className, onClick, ...rest } = props;
  const { pressProps } = usePress({ onPress: onClick });
  return (
    <motion.button
      ref={ref}
      type="button"
      className={cn(
        'flex items-center justify-center rounded-md border border-indigo-200 bg-white p-1 text-sm font-semibold text-indigo-600 hover:border-sky-400 hover:text-sky-400 dark:border-indigo-600 dark:bg-gray-900 dark:text-indigo-200 dark:hover:border-sky-300 dark:hover:text-sky-300 sm:p-2',
        className
      )}
      whileFocus={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...pressProps}
      {...rest}
    >
      {children}
    </motion.button>
  );
});

export default Button;
