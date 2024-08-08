/* eslint-disable react/no-danger */
import { Card } from '@wtf-ds/core';
import { twMerge } from 'tailwind-merge';

import { codeToHtml } from 'src/lib/shiki';

import CopyButton from './CopyButton';

const SyntaxHighlighter = async ({ className, code, filename, lang = 'text' }) => {
  const html = await codeToHtml(code, { lang });

  return (
    <Card
      className={twMerge('not-prose', className)}
      innerClassName="!p-0"
      actions={<CopyButton code={code} />}
      title={filename}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Card>
  );
};

export default SyntaxHighlighter;
