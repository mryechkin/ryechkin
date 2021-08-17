import useSWR from 'swr';

import { getHits, updateHits } from '@/lib/api';

export const useHits = (slug = 'index') => {
  const { data, error, mutate } = useSWR(slug, getHits);

  function increment(count = 1) {
    if (!data) return;
    mutate({ ...data, count: data.count + count }, false);
    mutate(updateHits({ slug, count: data.count + count }));
  }

  return {
    data,
    error,
    increment,
  };
};
