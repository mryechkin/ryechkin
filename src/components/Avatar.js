import { usePress } from 'react-aria';
import cn from 'classnames/dedupe';
import { motion } from 'framer-motion';
import Image from 'next/future/image';

export default function Avatar({ className, setConfetti, ...rest }) {
  const { pressProps } = usePress({
    onPress: async () => {
      if (setConfetti) setConfetti(true);
    },
  });

  return (
    <motion.button
      aria-label="Avatar"
      id="avatar"
      type="button"
      className={cn(
        'custom-focus-offset flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full focus:rounded-full md:h-12 md:w-12',
        className
      )}
      whileFocus={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...rest}
      {...pressProps}
    >
      <Image
        src="/assets/avatar.jpg"
        width={48}
        height={48}
        alt="Avatar"
        className="rounded-full"
      />
    </motion.button>
  );
}
