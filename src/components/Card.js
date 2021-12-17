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
        className="group grid overflow-hidden grid-cols-5 grid-rows-2 md:grid-rows-1 grid-flow-row md:grid-flow-col mt-6 max-h-full md:max-h-64 overflow-ellipsis bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-pink-500 hover:border-cyan-400 focus:border-cyan-400 dark:hover:border-cyan-300 dark:focus:border-cyan-300 focus:outline-none retro-shadow"
        whileFocus={{ y: -3 }}
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
      >
        <div className="flex flex-col col-span-5 md:col-span-3 justify-start items-start p-4">
          <div className="inline-flex flex-nowrap justify-start items-center text-lg md:text-xl lg:text-2xl font-bold text-left overflow-ellipsis group-hover:decoration-sky-accent group-focus:decoration-sky-accent accent">
            <span className="line-clamp-1">{item.title}</span>
            {isExternal && (
              <HiOutlineExternalLink className="inline-block flex-shrink-0 ml-2" />
            )}
          </div>
          {item.date && <DateDisplay className="mt-2" date={item.date} />}
          {item.tags?.length && (
            <div className="flex flex-wrap justify-start items-center">
              {item.tags.map((tag) => (
                <Pill key={tag} css={{ marginTop: '$4', marginRight: '$2' }}>
                  {tag}
                </Pill>
              ))}
            </div>
          )}
          {item.summary && (
            <p className="mt-4 text-left overflow-ellipsis line-clamp-4 md:line-clamp-3">
              {item.summary}
            </p>
          )}
        </div>
        <div className="col-span-5 md:col-span-2 p-4 pt-2 md:pt-4">
          <div className="flex relative justify-center items-center w-full h-full">
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
