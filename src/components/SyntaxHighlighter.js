'use client';

import { Card } from '@wtf-ds/core';
import cn from 'classnames';
import { Highlight, Prism, themes } from 'prism-react-renderer';

import CopyButton from './CopyButton';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

import('prismjs/components/prism-bash');

const SyntaxHighlighter = ({
  className: wrapperClassName,
  code,
  filename,
  language = 'text',
}) => (
  <Highlight code={code} language={language} theme={themes.shadesOfPurple}>
    {({ className, getLineProps, getTokenProps, style, tokens }) => (
      <Card
        className={wrapperClassName}
        innerClassName="!p-0"
        actions={<CopyButton code={code} />}
        title={filename}
      >
        <pre className={className} style={{ ...style }}>
          {tokens.slice(0, -1).map((line, i) => {
            const { key: lineKey, ...lineProps } = getLineProps({ line, key: i });
            return (
              <div key={lineKey} {...lineProps}>
                {line.map((token, key) => {
                  const { key: tokenKey, ...tokenProps } = getTokenProps({
                    token,
                    key,
                  });
                  return <span key={tokenKey} {...tokenProps} />;
                })}
              </div>
            );
          })}
        </pre>
      </Card>
    )}
  </Highlight>
);

export default SyntaxHighlighter;
