import { useEffect, useState } from 'react';
import cn from 'classnames/dedupe';
import { useTheme } from 'next-themes';
import Highlight, { defaultProps } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/dracula';
import lightTheme from 'prism-react-renderer/themes/github';

import CopyHeader from '@/components/CopyHeader';

const SyntaxHighlighter = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const code = children.props.children;
  const language = children.props.className?.replace(/language-/, '').trim();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={theme === 'dark' ? darkTheme : lightTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="relative font-mono border border-indigo-200 group dark:border-indigo-600">
          <CopyHeader
            className="absolute right-0 mt-1.5 mr-1.5 sm:mt-2 sm:mr-2"
            code={code}
            title={language}
          />
          <pre className={className} style={{ ...style }}>
            {tokens.slice(0, -1).map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default SyntaxHighlighter;