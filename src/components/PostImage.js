import Image from 'next/image';

export default function PostImage({ src, width, height, alt = '' }) {
  return (
    <div className="mx-auto my-4 max-w-2xl rounded-lg shadow">
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
