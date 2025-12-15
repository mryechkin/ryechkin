'use client';

import { FiCheck, FiCopy } from 'react-icons/fi';

import { useClipboard } from 'src/hooks';

import Button from './Button';

const CopyButton = ({ code, ...props }) => {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <Button aria-label="Copy" onClick={onCopy} {...props} title="Copy">
      {hasCopied ? <FiCheck /> : <FiCopy />}
    </Button>
  );
};

export default CopyButton;
