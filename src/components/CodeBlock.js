import React from 'react';
import { Button } from '@wtf-ds/core';
import cn from 'classnames/dedupe';
import { useTheme } from 'next-themes';
// import babelParser from 'prettier/parser-babel';
// import prettier from 'prettier/standalone';
import { themes } from 'prism-react-renderer';
import { SiPrettier } from 'react-icons/si';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

import CopyButton from './CopyButton';
import { Col, Hide, Row, Show } from './Primitives';

const scope = {
  Button,
  CopyButton,
  Hide,
  Show,
  Col,
  Row,
  ...React,
};

const CodeBlock = ({ children: rootChildren, noInline = false }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const { children } = rootChildren.props;
  const code = children.trim();
  const [editorCode, setEditorCode] = React.useState(code.trim());
  const { theme } = useTheme();

  // const formatOnKey = (e) => {
  //   if (e.ctrlKey && e.keyCode === 76) {
  //     formatCode();
  //   }
  // };

  // const formatCode = () => {
  //   setEditorCode((currentCode) =>
  //     prettier
  //       .format(currentCode, {
  //         parser: 'babel',
  //         plugins: [babelParser],
  //         trailingComma: 'es5',
  //       })
  //       .slice(0, -1),
  //   );
  // };

  const onChange = (newCode) => setEditorCode(newCode.trim());

  React.useEffect(() => {
    setIsMounted(true);
    // document.addEventListener('keyup', formatOnKey, false);
    // return () => document.removeEventListener('keyup', formatOnKey, false);
  }, []);

  if (isMounted && code) {
    return (
      <div className="flex w-full flex-col items-center justify-center">
        <LiveProvider
          code={editorCode}
          theme={theme === 'dark' ? themes.nightOwl : themes.github}
          scope={scope}
          noInline={noInline}
        >
          <LivePreview className="border-faint w-full rounded-md bg-white/50 p-2 backdrop-blur-lg dark:bg-slate-900/50" />
          <div
            className={cn(
              'border-faint relative mt-4 flex w-full flex-col items-center justify-center rounded-md p-2',
              {
                'bg-slate-900': theme === 'dark',
                'bg-gray-50': theme === 'light',
              },
            )}
          >
            <div className="absolute right-3 top-3 flex items-center justify-center gap-2">
              <Button aria-label="Format code" title="Format code" onClick={null}>
                <SiPrettier />
              </Button>
              <CopyButton code={code} />
            </div>
            <div className="text-xs font-bold uppercase text-slate-400">
              Editable Example
            </div>
            <LiveEditor onChange={onChange} className="w-full p-2" />
          </div>
          <LiveError className="mt-4 w-full bg-red-600 p-2 text-white" />
        </LiveProvider>
      </div>
    );
  }
  return null;
};

export default CodeBlock;
