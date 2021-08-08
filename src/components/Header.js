import { FaHandPeace } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Header({ setConfetti }) {
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-4">
      <div className="w-full max-w-3xl font-sans text-5xl font-bold tracking-tighter sm:text-center md:text-6xl lg:text-7xl">
        <span className="flex flex-wrap items-center justify-center">
          <span className="rainbow flex items-center justify-center p-2">
            Hey
            <motion.button
              aria-label="Hand showing peace sign"
              type="button"
              className="p-4"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setConfetti(true)}
            >
              <FaHandPeace className="dark:text-[#fec777] text-[#e87b32] w-8 h-8 font-bold sm:w-12 sm:h-12" />
            </motion.button>
            I&apos;m
          </span>
          <span className="retro ml-4">Mykhaylo.</span>
        </span>
      </div>
      <div className="flex justify-end mt-4 w-full max-w-3xl text-blue-400 dark:text-rose-400 font-sans text-base sm:mt-0">
        <span className="ml-1 font-medium">(like</span>
        <span className="ml-1 font-black">&quot;Kylo&quot;</span>
        <span className="font-medium">)</span>
      </div>
    </div>
  );
}
