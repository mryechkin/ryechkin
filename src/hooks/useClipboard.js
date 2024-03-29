import { useCallback, useEffect, useState } from 'react';
import copyToClipboard from 'copy-to-clipboard';

/**
 * Copies contents to clipboard
 * @param {string} text - Contents to copy
 * @param {Object} options - Hook options
 * @param {number} options.timeout - Delay in ms for the copy message
 * @return {boolean}
 */
export default function useClipboard(text, options = {}) {
  const { timeout = 1000 } = options;
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = useCallback(() => {
    const didCopy = copyToClipboard(text);
    setHasCopied(didCopy);
  }, [text]);

  useEffect(() => {
    let timeoutId;

    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);

  return { value: text, onCopy, hasCopied };
}
