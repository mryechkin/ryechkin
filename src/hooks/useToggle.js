import { useCallback, useState } from 'react';

export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue(!value), [value]);

  return [value, toggle, setValue];
}
