import cn from 'classnames/dedupe';
import Image from 'next/image';

export default function Avatar({ className }) {
  return (
    <span className={cn('inline-flex w-8 h-8 sm:w-14 sm:h-14', className)}>
      <Image
        src="/assets/avatar.jpg"
        width={56}
        height={56}
        alt="Avatar"
        className="rounded-full"
      />
    </span>
  );
}
