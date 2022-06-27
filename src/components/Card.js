import { FaYoutube } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import cn from 'classnames/dedupe';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import DateDisplay from './DateDisplay';
import Tags from './Tags';

export default function Card({ item, isExternal = false, isVideo = false }) {
  if (!item) return null;

  const { date, duration, href, imageUrl, readingTime, summary, tags, title } = item;

  return (
    <Link href={href} passHref>
      <motion.a
        className={cn(
          'custom-focus-offset group mt-6 grid max-h-full grid-flow-row grid-cols-5 overflow-hidden overflow-ellipsis rounded-lg border-2 border-pink-500 bg-gray-50 shadow-retro hover:border-cyan-400 focus:border-cyan-400 focus:outline-none dark:bg-gray-900 dark:shadow-retro-dark dark:hover:border-cyan-300 dark:focus:border-cyan-300',
          { 'sm:grid-rows-2 md:max-h-64 md:grid-flow-col md:grid-rows-1': imageUrl }
        )}
        whileFocus={{ y: -3 }}
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
      >
        <div
          className={cn('col-span-5 flex flex-col items-center justify-start gap-4 p-4', {
            'md:col-span-3 md:items-start': imageUrl,
          })}
        >
          <div className="inline-flex items-center justify-start text-lg font-bold text-left flex-nowrap overflow-ellipsis group-hover:text-black group-hover:decoration-sky-300 group-focus:text-black group-focus:decoration-sky-300 dark:group-hover:text-sky-300 dark:group-hover:decoration-sky-300 dark:group-focus:text-sky-300 dark:group-focus:decoration-sky-300 md:text-xl lg:text-2xl">
            <span className="line-clamp-2">
              {title}
              {isExternal && (
                <HiOutlineExternalLink className="flex-shrink-0 inline-block ml-2" />
              )}
            </span>
          </div>
          {date && <DateDisplay data={{ date, duration, readingTime }} />}
          {tags?.length && <Tags list={tags} />}
          {summary && (
            <p className="text-left overflow-ellipsis line-clamp-4 md:line-clamp-3">
              {summary}
            </p>
          )}
        </div>
        {imageUrl && (
          <div className="hidden col-span-5 px-4 pb-4 sm:block md:col-span-2 md:pt-4">
            <div className="relative flex items-center justify-center w-full h-full">
              <Image
                className="bg-gray-900 rounded-lg"
                src={imageUrl}
                alt={title}
                layout="fill"
                objectFit="cover"
              />
              {isVideo && (
                <FaYoutube className="absolute w-32 h-32 text-white opacity-60 group-hover:opacity-90 group-focus:opacity-90" />
              )}
            </div>
          </div>
        )}
      </motion.a>
    </Link>
  );
}
