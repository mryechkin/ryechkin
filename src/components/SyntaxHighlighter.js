import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Highlight, themes } from 'prism-react-renderer';

import CopyButton from './CopyButton';

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
      code={code}
      language={language}
      theme={theme === 'dark' ? themes.nightOwl : themes.github}
    >
      {({ className, getLineProps, getTokenProps, style, tokens }) => (
        <div className="group relative border-2 border-indigo-200 font-mono dark:border-indigo-800">
          <CopyButton
            className="absolute right-0 mr-1.5 mt-1.5 sm:mr-2 sm:mt-2"
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
