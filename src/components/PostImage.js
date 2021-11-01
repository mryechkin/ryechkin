import { XIcon } from '@heroicons/react/solid';
import cn from 'classnames';
import Image from 'next/image';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
  IconButton,
} from 'wtf-design-system';

import Caption from './Caption';

export default function PostImage({ className, src, width, height, caption = '' }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Dialog css={{ px: '$8' }}>
        <DialogTrigger asChild>
          <button
            className={cn(
              'custom-focus-offset mx-auto my-4 w-full max-w-xl rounded-lg shadow cursor-pointer',
              className
            )}
            type="button"
          >
            <Image
              src={src}
              className="rounded-lg"
              layout="responsive"
              height={height}
              width={width}
              quality={100}
              alt={caption}
            />
          </button>
        </DialogTrigger>
        <DialogContent css={{ width: '96vw' }}>
          <Image
            src={src}
            className="rounded-lg"
            layout="fill"
            objectFit="contain"
            quality={100}
            alt={caption}
          />
          <DialogClose asChild>
            <IconButton>
              <XIcon className="w-8 h-8" />
            </IconButton>
          </DialogClose>
        </DialogContent>
      </Dialog>
      {caption && <Caption>{caption}</Caption>}
    </div>
  );
}
