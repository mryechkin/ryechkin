import { CgSun } from 'react-icons/cg';
import { IoMoon } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function DarkModeToggle({ enabled, setEnabled }) {
  return (
    <motion.button
      className="p-2"
      onClick={setEnabled}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {enabled && <IoMoon className="w-6 h-6 text-blue-600" />}
      {!enabled && <CgSun className="w-6 h-6 text-rose-400" />}
    </motion.button>
  );
}
