import { usePress } from 'react-aria';
import { FaHandPeace } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Header({ setConfetti }) {
  const { pressProps } = usePress({
    onPress: () => setConfetti(true),
  });
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-4">
      <div className="w-full max-w-3xl font-sans text-5xl font-bold tracking-tighter sm:text-center md:text-6xl lg:text-7xl">
        <span className="flex flex-wrap items-center justify-center">
          <span className="flex items-center justify-center p-2 dark:text-yellow-300 text-yellow-400">
            Hey
            <motion.button
              aria-label="Hand showing peace sign"
              type="button"
              className="p-3 rounded-md"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              {...pressProps}
            >
              <FaHandPeace className="w-8 h-8 dark:text-yellow-300 text-yellow-400 font-bold sm:w-12 sm:h-12" />
            </motion.button>
            I&apos;m
          </span>
          <span className="retro ml-4">Mykhaylo.</span>
        </span>
      </div>
      <div className="flex justify-end mt-2 w-full max-w-2xl text-blue-500 dark:text-rose-200 font-sans text-base sm:mt-1">
        <span className="ml-1 font-medium">(like</span>
        <span className="ml-1 font-black">&quot;Kylo&quot;</span>
        <span className="font-medium">)</span>
      </div>
    </div>
  );
}
