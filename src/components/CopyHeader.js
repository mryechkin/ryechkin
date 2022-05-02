import { usePress } from 'react-aria';
import { FiCheck, FiCopy } from 'react-icons/fi';
import cn from 'classnames/dedupe';
import { motion } from 'framer-motion';

import { useClipboard } from '@/hooks';

const CopyHeader = ({ className, code }) => {
  const { hasCopied, onCopy } = useClipboard(code);
  const { pressProps } = usePress({
    onPress: () => {
      onCopy();
    },
  });

  return (
    <div
      className={cn(
        'flex items-center justify-end',
        { 'hidden group-hover:flex': !hasCopied },
        className
      )}
    >
      <motion.button
        aria-label="Copy code"
        type="button"
        className="flex items-center justify-center p-1 text-sm font-semibold text-indigo-600 bg-white border border-indigo-200 rounded-md hover:border-sky-400 hover:text-sky-400 dark:border-indigo-600 dark:bg-gray-900 dark:text-indigo-200 dark:hover:border-sky-300 dark:hover:text-sky-300 sm:p-2"
        whileFocus={{ scale: 1.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        {...pressProps}
      >
        {hasCopied ? <FiCheck /> : <FiCopy />}
      </motion.button>
    </div>
  );
};

export default CopyHeader;
