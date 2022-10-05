import { FaYoutube } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import cn from 'classnames/dedupe';
import { motion } from 'framer-motion';
import Image from 'next/future/image';
import Link from 'next/link';

import DateDisplay from './DateDisplay';
import Tags from './Tags';

export default function Card({
  className,
  item,
  hideCover = false,
  isExternal = false,
  isVideo = false,
}) {
  if (!item) return null;

  const { date, duration, href, imageUrl, readingTime, summary, tags, title } = item;

  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <div className={cn('w-full', className)}>
      <Link href={href} passHref>
        <motion.a
          className={cn(
            'not-prose custom-focus-offset group grid max-h-full grid-flow-row grid-cols-5 overflow-hidden overflow-ellipsis rounded-lg border-2 border-pink-500 bg-gray-50 no-underline shadow-retro hover:border-cyan-400 focus:border-cyan-400 focus:outline-none dark:bg-gray-900 dark:shadow-retro-dark dark:hover:border-cyan-300 dark:focus:border-cyan-300',
            {
              'md:grid-flow-col': imageUrl && !hideCover,
            }
          )}
          whileFocus={{ y: -3 }}
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
          {...externalProps}
        >
          <div
            className={cn(
              'col-span-5 flex flex-col items-center justify-start gap-4 p-4',
              {
                'md:col-span-3 md:items-start': imageUrl && !hideCover,
              }
            )}
          >
            <div
              className={cn(
                'inline-flex w-full flex-nowrap items-center justify-center text-ellipsis text-lg font-bold group-hover:text-black group-hover:decoration-sky-300 group-focus:text-black group-focus:decoration-sky-300 dark:group-hover:text-sky-300 dark:group-hover:decoration-sky-300 dark:group-focus:text-sky-300 dark:group-focus:decoration-sky-300 md:text-xl lg:text-2xl',
                { 'md:justify-center': hideCover, 'md:justify-start': !hideCover }
              )}
            >
              <span className="text-center line-clamp-2">
                {title}
                {isExternal && (
                  <HiOutlineExternalLink className="ml-2 inline-block shrink-0" />
                )}
              </span>
            </div>
            {date && <DateDisplay data={{ date, duration, readingTime }} />}
            {tags?.length > 0 && <Tags className="justify-center" list={tags} />}
            {summary && (
              <p className="text-ellipsis text-left line-clamp-4 md:line-clamp-3">
                {summary}
              </p>
            )}
          </div>
          {!hideCover && imageUrl && (
            <div className="col-span-5 hidden px-4 pb-4 sm:block md:col-span-2 md:pt-4">
              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  className="w-full rounded-lg bg-gray-900"
                  src={imageUrl}
                  alt={title}
                  width={1200}
                  height={627}
                />
                {isVideo && (
                  <FaYoutube className="absolute h-32 w-32 text-white opacity-60 group-hover:opacity-90 group-focus:opacity-90" />
                )}
              </div>
            </div>
          )}
        </motion.a>
      </Link>
    </div>
  );
}
