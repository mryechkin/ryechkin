import { FaYoutube } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import DateDisplay from './DateDisplay';
import Tags from './Tags';

export default function Card({ item, isExternal = false, isVideo = false }) {
  if (!item) return null;

  const { date, readingTime, duration } = item;

  return (
    <Link href={item.href} passHref>
      <motion.a
        className="grid max-h-full grid-flow-row grid-cols-5 grid-rows-2 mt-6 overflow-hidden border-2 border-pink-500 rounded-lg retro-shadow group overflow-ellipsis bg-gray-50 hover:border-cyan-400 focus:border-cyan-400 focus:outline-none dark:bg-gray-900 dark:hover:border-cyan-300 dark:focus:border-cyan-300 md:max-h-64 md:grid-flow-col md:grid-rows-1"
        whileFocus={{ y: -3 }}
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
      >
        <div className="flex flex-col items-center justify-start col-span-5 gap-4 p-4 md:col-span-3 md:items-start">
          <div className="inline-flex items-center justify-start text-lg font-bold text-left accent-underline flex-nowrap overflow-ellipsis group-hover:text-black group-hover:decoration-sky-300 group-focus:text-black group-focus:decoration-sky-300 dark:group-hover:text-sky-300 dark:group-hover:decoration-sky-300 dark:group-focus:text-sky-300 dark:group-focus:decoration-sky-300 md:text-xl lg:text-2xl">
            <span className="line-clamp-1">{item.title}</span>
            {isExternal && (
              <HiOutlineExternalLink className="flex-shrink-0 inline-block ml-2" />
            )}
          </div>
          <DateDisplay data={{ date, duration, readingTime }} />
          {item.tags?.length && <Tags list={item.tags} />}
          {item.summary && (
            <p className="text-left overflow-ellipsis line-clamp-4 md:line-clamp-3">
              {item.summary}
            </p>
          )}
        </div>
        <div className="col-span-5 p-4 pt-2 md:col-span-2 md:pt-4">
          <div className="relative flex items-center justify-center w-full h-full">
            <Image
              className="bg-gray-900 rounded-lg"
              src={item.imageUrl}
              alt={item.title}
              layout="fill"
              objectFit={isVideo ? 'cover' : 'contain'}
            />
            {isVideo && (
              <FaYoutube className="absolute w-32 h-32 text-white opacity-60 group-hover:opacity-90 group-focus:opacity-90" />
            )}
          </div>
        </div>
      </motion.a>
    </Link>
  );
}
