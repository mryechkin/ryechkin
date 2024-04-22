'use client';

import { Button } from '@wtf-ds/core';
import { useRouter } from 'next/navigation';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

export default function SearchButton() {
  const router = useRouter();
  return (
    <Button className="rounded-full p-2" onClick={() => router.push('/search')}>
      <HiOutlineMagnifyingGlass className="h-6 w-6" />
    </Button>
  );
}
