import { FiCheck, FiCopy } from 'react-icons/fi';

import Button from './Button';

import { useClipboard } from '@/hooks';

const CopyButton = ({ code, ...props }) => {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <Button aria-label="Copy code" onClick={onCopy} {...props}>
      {hasCopied ? <FiCheck /> : <FiCopy />}
    </Button>
  );
};

export default CopyButton;
