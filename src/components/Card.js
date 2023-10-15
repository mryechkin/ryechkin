import { FaYoutube } from 'react-icons/fa';
import { ButtonCard } from '@wtf-ds/core';
import cn from 'classnames/dedupe';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import DateDisplay from './DateDisplay';
import Tags from './Tags';

export default function Card({
  className,
  hideCover = false,
  isExternal = false,
  isVideo = false,
  item,
}) {
  if (!item) return null;

  const { date, duration, href, imageUrl, readingTime, summary, tags, title } = item;

  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <div className={cn('w-full', className)}>
      <Link href={href} passHref legacyBehavior>
        <ButtonCard
          as={motion.a}
          className={cn(
            'not-prose group grid max-h-full grid-flow-row grid-cols-5 overflow-hidden overflow-ellipsis !p-0 no-underline',
            imageUrl && !hideCover && 'md:grid-flow-col',
          )}
          {...externalProps}
        >
          <div
            className={cn(
              'col-span-5 flex flex-col items-center justify-start gap-4 p-4',
              {
                'md:col-span-3 md:items-start': imageUrl && !hideCover,
              },
            )}
          >
            <div
              className={cn(
                'inline-flex w-full flex-nowrap items-center justify-center text-ellipsis text-lg font-bold group-hover:text-black group-hover:decoration-sky-300 group-focus:text-black group-focus:decoration-sky-300 dark:group-hover:text-sky-300 dark:group-hover:decoration-sky-300 dark:group-focus:text-sky-300 dark:group-focus:decoration-sky-300 md:text-xl lg:text-2xl',
                { 'md:justify-center': hideCover, 'md:justify-start': !hideCover },
              )}
            >
              <span
                className={cn(
                  'line-clamp-2 w-full text-center',
                  !hideCover && 'md:text-start',
                )}
              >
                {title}
              </span>
            </div>
            {date && (
              <DateDisplay
                data={{ date, duration, readingTime }}
                isExternal={isExternal}
              />
            )}
            {tags?.length > 0 && <Tags className="justify-center" list={tags} />}
            {summary && (
              <p className="line-clamp-4 text-ellipsis text-left md:line-clamp-3">
                {summary}
              </p>
            )}
          </div>
          {!hideCover && imageUrl && (
            <div className="col-span-5 hidden px-4 pb-4 md:col-span-2 md:block md:pt-4">
              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  className="w-full rounded-lg bg-slate-900"
                  src={imageUrl}
                  alt={title}
                  objectFit="cover"
                  fill
                  priority
                />
                {isVideo && (
                  <FaYoutube className="absolute h-32 w-32 text-white opacity-60 group-hover:opacity-90 group-focus:opacity-90" />
                )}
              </div>
            </div>
          )}
        </ButtonCard>
      </Link>
    </div>
  );
}
