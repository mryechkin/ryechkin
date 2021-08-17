/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { getHits, updateHits } from '@/lib/api';

export const useHits = (slug = 'index') => {
  const [init, setInit] = useState(false);
  const { data, error, mutate } = useSWR(slug, getHits);

  useEffect(() => {
    if (!init && data) setInit(true);
  }, [data]);

  function increment(count = 1) {
    if (!data) return;
    mutate({ ...data, count: data.count + count }, false);
    mutate(updateHits({ slug, count: data.count + count }));
  }

  return {
    data,
    error,
    init,
    increment,
  };
};
