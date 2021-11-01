import { FaYoutube } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import DateDisplay from './DateDisplay';
import Pill from './Pill';

export default function Card({ item, isExternal = false, isVideo = false }) {
  if (!item) return null;

  return (
    <Link href={item.href} passHref>
      <motion.a
        className="retro-shadow group dark:focus:border-cyan-300 dark:hover:border-cyan-300 grid grid-flow-row grid-cols-5 grid-rows-2 mt-6 max-h-full bg-gray-50 dark:bg-gray-900 border-2 focus:border-cyan-400 hover:border-cyan-400 border-pink-500 rounded-lg focus:outline-none overflow-hidden overflow-ellipsis md:grid-flow-col md:grid-rows-1 md:max-h-64"
        whileFocus={{ y: -3 }}
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
      >
        <div className="flex flex-col col-span-5 items-start justify-start p-4 md:col-span-3">
          <div className="dark:group-hover:bg-gray-900 dark:group-focus:bg-gray-900 inline-flex flex-nowrap items-center justify-start dark:px-0 px-2 text-left dark:text-cyan-300 text-cyan-300 group-hover:text-white group-focus:text-white text-lg font-bold group-hover:bg-black group-focus:bg-black bg-gray-900 overflow-ellipsis md:text-xl lg:text-2xl">
            <span className="line-clamp-1">{item.title}</span>
            {isExternal && (
              <HiOutlineExternalLink className="inline-block flex-shrink-0 ml-2" />
            )}
          </div>
          {item.date && <DateDisplay className="mt-2" date={item.date} />}
          {item.tags?.length && (
            <div className="flex flex-wrap items-center justify-start">
              {item.tags.map((tag) => (
                <Pill key={tag} css={{ marginTop: '$4', marginRight: '$2' }}>
                  {tag}
                </Pill>
              ))}
            </div>
          )}
          {item.summary && (
            <p className="line-clamp-4 md:line-clamp-3 mt-4 text-left overflow-ellipsis">
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
