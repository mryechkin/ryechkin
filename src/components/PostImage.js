import Image from 'next/image';

export default function PostImage({ src, width, height, alt = '' }) {
  return (
    <div className="mb-4 mx-auto max-w-2xl rounded-lg shadow lg:mb-8">
      <Image
        src={src}
        className="rounded-lg"
        layout="responsive"
        height={height}
        width={width}
        quality={100}
        alt={alt}
      />
    </div>
  );
}
