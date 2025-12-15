'use client';

import { useRouter } from 'next/navigation';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

import Button from './Button';

export default function SearchButton() {
  const router = useRouter();
  return (
    <Button className="rounded-full p-2" onClick={() => router.push('/search')}>
      <HiOutlineMagnifyingGlass className="size-6" />
    </Button>
  );
}
