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
    <div className="flex w-full flex-col items-center justify-center">
      <Dialog css={{ px: '$8', zIndex: 99999 }}>
        <DialogTrigger asChild>
          <button
            className={cn(
              'custom-focus-offset mx-auto my-4 w-full max-w-xl cursor-pointer rounded-lg shadow',
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
              <XIcon className="h-8 w-8" />
            </IconButton>
          </DialogClose>
        </DialogContent>
      </Dialog>
      {caption && <Caption>{caption}</Caption>}
    </div>
  );
}
