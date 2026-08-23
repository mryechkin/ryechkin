/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

import { getHits, incrementHits } from 'src/lib/api';

export const useHits = (slug = 'index') => {
  const [init, setInit] = useState(false);
  const { data, error, mutate } = useSWR(slug, getHits);

  useEffect(() => {
    if (!init && data) setInit(true);
  }, [data]);

  function increment() {
    if (!data || process.env.NEXT_PUBLIC_APP_ENV !== 'production') {
      return;
    }

    mutate({ ...data, count: data.count + 1 }, false);
    mutate(incrementHits(slug));
  }

  return {
    data,
    error,
    init,
    increment,
  };
};

// Credit: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
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

// Credit: Sam Selikoff (https://youtu.be/aV2YJuxQ2vo?t=1252)
export const usePrevious = (state) => {
  const [tuple, setTuple] = useState([null, state]);

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
};
