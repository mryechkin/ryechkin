import { forwardRef } from 'react';
import { usePress } from 'react-aria';
import cn from 'classnames/dedupe';
import { motion } from 'framer-motion';

const Button = forwardRef((props, ref) => {
  const { children, className, onClick, outline = true, ...rest } = props;
  const { pressProps } = usePress({ onPress: onClick });
  return (
    <motion.button
      ref={ref}
      type="button"
      className={cn(
        {
          'flex items-center justify-center p-1 text-sm font-semibold sm:p-2': true,
          'button-outline rounded-md bg-slate-100 text-indigo-600 backdrop-blur hover:text-sky-400 dark:bg-slate-900 dark:text-indigo-200 dark:hover:text-sky-300':
            outline,
        },
        className,
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
