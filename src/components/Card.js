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
        className="group retro-shadow mt-6 grid max-h-full grid-flow-row grid-cols-5 grid-rows-2 overflow-hidden overflow-ellipsis rounded-lg border-2 border-pink-500 bg-gray-50 hover:border-cyan-400 focus:border-cyan-400 focus:outline-none dark:bg-gray-900 dark:hover:border-cyan-300 dark:focus:border-cyan-300 md:max-h-64 md:grid-flow-col md:grid-rows-1"
        whileFocus={{ y: -3 }}
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
      >
        <div className="col-span-5 flex flex-col items-start justify-start p-4 md:col-span-3">
          <div className="accent inline-flex flex-nowrap items-center justify-start overflow-ellipsis text-left text-lg font-bold group-hover:decoration-sky-accent group-focus:decoration-sky-accent md:text-xl lg:text-2xl">
            <span className="line-clamp-1">{item.title}</span>
            {isExternal && (
              <HiOutlineExternalLink className="ml-2 inline-block flex-shrink-0" />
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
            <p className="mt-4 overflow-ellipsis text-left line-clamp-4 md:line-clamp-3">
              {item.summary}
            </p>
          )}
        </div>
        <div className="col-span-5 p-4 pt-2 md:col-span-2 md:pt-4">
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              className="rounded-lg bg-gray-900"
              src={item.imageUrl}
              alt={item.title}
              layout="fill"
              objectFit={isVideo ? 'cover' : 'contain'}
            />
            {isVideo && (
              <FaYoutube className="absolute h-32 w-32 text-white opacity-60 group-hover:opacity-90 group-focus:opacity-90" />
            )}
          </div>
        </div>
      </motion.a>
    </Link>
  );
}
