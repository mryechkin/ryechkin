/* eslint-disable consistent-return */
import { useEffect, useRef, useState } from 'react';
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

// Credits: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
