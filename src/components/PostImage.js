/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import Caption from './Caption';
import Modal from './Modal';

export default function PostImage({ className, src, width, height, caption = '' }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <button
        className={cn(
          'custom-focus-offset mx-auto my-4 w-full max-w-xl cursor-pointer rounded-lg shadow',
          className
        )}
        type="button"
        onClick={() => setOpen(true)}
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
      <Modal open={open} setOpen={setOpen}>
        <img src={src} className="rounded-lg" alt={caption} />
      </Modal>
      {caption && <Caption>{caption}</Caption>}
    </div>
  );
}
