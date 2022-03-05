/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import Caption from './Caption';
import Modal from './Modal';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

export default function PostImage({ className, src, width, height, caption = '' }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full">
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
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
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
