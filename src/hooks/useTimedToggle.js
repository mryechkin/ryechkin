import { useEffect } from 'react';

import useToggle from './useToggle';

/**
 * Toggles a boolean value for the specified amount of time, before resetting to initial
 * @param {boolean} initialValue - Initial value
 * @param {number} timeout - Delay in ms for toggled state to remain
 * @return {array}
 */
export default function useTimedToggle(initialValue = false, timeout = 1000) {
  const [value, toggle, setValue] = useToggle(initialValue);

  useEffect(() => {
    let timeoutId;

    if (value !== initialValue) {
      timeoutId = window.setTimeout(() => {
        toggle();
      }, timeout);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeout, value]);

  return [value, setValue];
}
