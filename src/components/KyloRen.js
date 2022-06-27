import cn from 'classnames/dedupe';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function KyloRen({ className }) {
  const { theme } = useTheme();

  return theme === 'light' ? (
    <Image src="/assets/kyloren.svg" height="32" width="32" alt="Kylo Ren" />
  ) : (
    <Image src="/assets/kyloren-inverse.svg" height="32" width="32" alt="Kylo Ren" />
  );

  // return (
  //   <span
  //     aria-hidden="true"
  //     id="kylo-ren"
  //     className={cn('w-8 select-none rounded-full p-1 focus:rounded-full', className)}
  //   >
  //     {}
  //   </span>
  // );
}
