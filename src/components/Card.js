import { FaYoutube } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import Pill from './Pill';

export default function Card({ item, isExternal }) {
  return (
    <Link href={item.href} passHref>
      <motion.a
        className="retro-shadow group dark:focus:border-cyan-300 dark:hover:border-cyan-300 grid grid-flow-row grid-cols-4 grid-rows-2 mt-6 max-h-full bg-gray-50 dark:bg-gray-900 border-2 focus:border-cyan-400 hover:border-cyan-400 border-pink-500 rounded-lg focus:outline-none overflow-hidden overflow-ellipsis md:grid-flow-col md:grid-rows-1 md:max-h-64"
        whileFocus={{ y: -3 }}
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
      >
        <div className="flex flex-col col-span-4 items-start justify-start p-4 md:col-span-3">
          <h1 className="dark:group-hover:bg-gray-900 dark:group-focus:bg-gray-900 inline-flex flex-nowrap items-center justify-start px-2 text-left dark:text-cyan-300 text-cyan-300 group-hover:text-white group-focus:text-white text-lg font-bold group-hover:bg-black group-focus:bg-black bg-gray-900 overflow-ellipsis md:text-xl lg:text-2xl">
            <span className="line-clamp-1">{item.title}</span>
            {isExternal && (
              <HiOutlineExternalLink className="inline-block flex-shrink-0 ml-2" />
            )}
          </h1>
          <p className="line-clamp-4 md:line-clamp-3 mt-4 text-left overflow-ellipsis">
            {item.description}
          </p>
          {item?.tags?.length && (
            <div className="flex flex-wrap items-center justify-start">
              {item.tags.map((tag) => (
                <Pill key={tag} css={{ marginTop: '$4', marginRight: '$2' }}>
                  {tag}
                </Pill>
              ))}
            </div>
          )}
        </div>
        <div className="col-span-4 p-4 pt-2 md:col-span-1 md:pt-4">
          <div className="relative flex items-center justify-center w-full h-full">
            <Image
              className="rounded-lg"
              src={item.imageUrl}
              alt={item.title}
              layout="fill"
              objectFit="cover"
            />
            <FaYoutube className="absolute w-32 h-32 text-white opacity-60 group-hover:opacity-90 group-focus:opacity-90" />
          </div>
        </div>
      </motion.a>
    </Link>
  );
}
