import { Card } from '@wtf-ds/core';
import { Code } from 'bright';

import theme from 'src/lib/themes/vscode/shadesOfPurple';

import CopyButton from './CopyButton';

Code.theme = theme;

const SyntaxHighlighter = ({ className, code, filename, language = 'text' }) => (
  <Card
    className={className}
    innerClassName="!p-0"
    actions={<CopyButton code={code} />}
    title={filename}
  >
    <Code className="!my-0" lang={language}>
      {code.trim()}
    </Code>
  </Card>
);

export default SyntaxHighlighter;
