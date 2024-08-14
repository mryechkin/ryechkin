'use client';

import { useEffect, useState } from 'react';
import { Button } from '@wtf-ds/core';
import cn from 'classnames/dedupe';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchInput(props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get('q');
  const [searchText, setSearchText] = useState(q || '');

  // This is needed in order to populate the search text after refreshing
  // the page. This is because simply passing it as initial value for
  // `useState()` doesn't update when the router object loads the query
  // string after first render.
  useEffect(() => {
    if (q) {
      setSearchText(q);
    }
  }, [q]);

  async function submitForm(formData) {
    const query = formData.get('query');
    if (query) {
      router.push(`/search?q=${query}`);
    }
  }

  return (
    <form action={submitForm} className="my-4 flex items-center gap-3">
      <input
        {...props}
        className={cn(
          'wtf-Button wtf-Button-primary w-full cursor-auto p-2 text-xl',
          props?.className,
        )}
        name="query"
        type="search"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search articles"
        value={searchText}
      />
      <Button
        className="self-center bg-indigo-50 !p-3 dark:bg-indigo-950 sm:w-auto"
        type="submit"
        variant="primary"
      >
        Search
      </Button>
    </form>
  );
}
