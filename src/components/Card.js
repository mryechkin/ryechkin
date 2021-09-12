import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Card({ item, isExternal }) {
  return (
    <Link href={item.href} passHref>
      <motion.a
        className="retro-shadow focus grid grid-flow-row grid-cols-4 mt-6 max-h-full border-2 border-pink-500 rounded-lg overflow-hidden overflow-ellipsis sm:grid-flow-col sm:max-h-40"
        whileFocus={{ y: -3 }}
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
      >
        <img
          src={item.imageUrl}
          className="col-span-4 w-full h-full object-cover sm:col-span-1"
          alt={item.title}
        />
        <div className="flex flex-col col-span-4 items-start justify-start p-4 bg-gray-50 dark:bg-gray-900 sm:col-span-3">
          <h1 className="inline-flex flex-nowrap items-center justify-start text-left dark:text-cyan-300 text-cyan-500 text-lg font-bold overflow-ellipsis sm:text-xl md:text-2xl">
            <span className="line-clamp-1">{item.title}</span>
            {isExternal && (
              <HiOutlineExternalLink className="inline-block flex-shrink-0 ml-2" />
            )}
          </h1>
          <p className="line-clamp-4 sm:line-clamp-3 mt-4 text-left overflow-ellipsis">
            {item.description}
          </p>
        </div>
      </motion.a>
    </Link>
  );
}
