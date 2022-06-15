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
  const { timeout = 2000 } = options;
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    const didCopy = copyToClipboard(text);
    setCopied(didCopy);
  }, [text]);

  useEffect(() => {
    let timeoutId;

    if (copied) {
      timeoutId = window.setTimeout(() => {
        setCopied(false);
      }, timeout);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, copied]);

  return { value: text, copy, copied };
}
