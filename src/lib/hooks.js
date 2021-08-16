import useSWR from 'swr';

import { getRickRoll, updateRickRoll } from '@/lib/api';

export const useRickRoll = () => {
  const { data, error, mutate } = useSWR('rickroll', getRickRoll);

  function goteem() {
    if (!data) return;
    mutate({ ...data, count: data.count + 1 }, false);
    mutate(updateRickRoll(data.count + 1));
  }

  return {
    data,
    error,
    goteem,
  };
};
