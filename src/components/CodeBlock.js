import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import * as Framer from 'framer-motion';
import { useTheme } from 'next-themes';
import babelParser from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import darkTheme from 'prism-react-renderer/themes/vsDark';
import lightTheme from 'prism-react-renderer/themes/vsLight';

import { useClipboard } from '@/hooks';

const CopyHeader = ({ code, onFormat, title = 'jsx', message = 'Copied!' }) => {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <div className="flex items-center justify-between w-full py-2 text-xs font-semibold uppercase">
      {title && <span className="font-mono font-normal text-gray-400">{title}</span>}
      <div className="flex items-center justify-center gap-2">
        <button
          className="custom-focus-offset min-w-[4rem] select-none rounded-md border-2 border-indigo-200 bg-gray-50 px-4 py-1 text-xs font-bold uppercase text-indigo-600 hover:border-sky-400 hover:text-sky-400 dark:border-indigo-600 dark:bg-gray-800 dark:text-indigo-200 dark:hover:border-sky-300 dark:hover:text-sky-300"
          onClick={onFormat}
          type="button"
        >
          Format
        </button>
        <button
          className="custom-focus-offset min-w-[4rem] select-none rounded-md border-2 border-indigo-200 bg-gray-50 px-4 py-1 text-xs font-bold uppercase text-indigo-600 hover:border-sky-400 hover:text-sky-400 dark:border-indigo-600 dark:bg-gray-800 dark:text-indigo-200 dark:hover:border-sky-300 dark:hover:text-sky-300"
          onClick={onCopy}
          type="button"
        >
          {hasCopied ? message : 'Copy'}
        </button>
      </div>
    </div>
  );
};

const scope = {
  ...Framer,
  ...React,
};

const CodeBlock = ({ code, noInline = false }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [editorCode, setEditorCode] = React.useState(code.trim());
  const { theme } = useTheme();
  let syntaxTheme = darkTheme;

  if (theme === 'light') {
    syntaxTheme = lightTheme;
  }

  const formatOnKey = (e) => {
    if (e.ctrlKey && e.keyCode === 76) {
      formatCode();
    }
  };

  const formatCode = () => {
    setEditorCode((currentCode) =>
      prettier.format(currentCode, {
        parser: 'babel',
        plugins: [babelParser],
      })
    );
  };

  const onChange = (newCode) => {
    setEditorCode(newCode.trim());
  };

  React.useEffect(() => {
    setIsMounted(true);
    document.addEventListener('keyup', formatOnKey, false);
    return () => document.removeEventListener('keyup', formatOnKey, false);
  }, []);

  if (isMounted && code) {
    return (
      <LiveProvider
        code={editorCode}
        scope={scope}
        theme={syntaxTheme}
        noInline={noInline}
      >
        <div className="p-4 bg-gray-100 border-2 border-indigo-200 rounded dark:border-indigo-600 dark:bg-gray-800">
          <LivePreview />
        </div>
        <div className="py-4">
          <LiveError />
        </div>
        <CopyHeader code={editorCode} onFormat={formatCode} title="Editable Example" />
        <LiveEditor className="live-editor" onChange={onChange} />
      </LiveProvider>
    );
  }
  return null;
};

export default CodeBlock;
