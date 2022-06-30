import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function KyloRen() {
  const { theme } = useTheme();

  return theme === 'light' ? (
    <Image src="/assets/kyloren.svg" height="32" width="32" alt="Kylo Ren" />
  ) : (
    <Image src="/assets/kyloren-inverse.svg" height="32" width="32" alt="Kylo Ren" />
  );
}
