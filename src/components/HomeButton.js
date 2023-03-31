import { HomeIcon } from '@heroicons/react/outline';
import cn from 'classnames/dedupe';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeButton({ className }) {
  return (
    <Link href="/" prefetch={false} passHref legacyBehavior>
      <motion.a
        className={cn(
          'p-2 text-slate-700 hover:text-sky-300 focus:text-sky-300 dark:text-slate-200 dark:hover:text-sky-300 dark:focus:text-sky-300',
          className
        )}
        whileFocus={{ scale: 1.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="sr-only">Home</span>
        <HomeIcon className="h-6 w-6 lg:h-8 lg:w-8" aria-hidden="true" />
      </motion.a>
    </Link>
  );
}
