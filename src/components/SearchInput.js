'use client';

import { useEffect, useState } from 'react';
import cn from 'classnames/dedupe';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchInput(props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get('q');
  const [searchText, setSearchText] = useState(q);

  // This is needed in order to populate the search text after refreshing
  // the page. This is because simply passing it as initial value for
  // `useState()` doesn't update when the router object loads the query
  // string after first render.
  useEffect(() => {
    if (q) {
      setSearchText(q);
    }
  }, [q]);

  function submitForm(e) {
    e.preventDefault();
    if (searchText) {
      router.push(`/search?q=${searchText}`);
    }
  }

  return (
    <form onSubmit={submitForm}>
      <input
        {...props}
        className={cn(
          'wtf-Button wtf-Button-primary w-full cursor-auto p-4 text-xl',
          props?.className,
        )}
        type="search"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search articles"
        value={searchText}
      />
    </form>
  );
}
