import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import cn from 'classnames/dedupe';
import * as Framer from 'framer-motion';
import { useTheme } from 'next-themes';
import babelParser from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import darkTheme from 'prism-react-renderer/themes/vsDark';
import lightTheme from 'prism-react-renderer/themes/vsLight';
import styled from 'styled-components';

import Avatar from './Avatar';
import BackToTop from './BackToTop';
import Badges from './Badges';
import Card from './Card';
import Counter from './Counter';
import DarkModeToggle from './DarkModeToggle';
import ExternalLink from './ExternalLink';
import KyloRen from './KyloRen';
import { Box, Col, Hide, Row, Show } from './Primitives';

import { useClipboard } from '@/hooks';

const scope = {
  Avatar,
  BackToTop,
  Badges,
  Box,
  Card,
  Counter,
  DarkModeToggle,
  ExternalLink,
  KyloRen,
  Hide,
  Show,
  Col,
  Row,
  styled,
  ...Framer,
  ...React,
};

const CodeBlock = ({ code, noInline = false }) => {
  const { copied, copy } = useClipboard(code);
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
        trailingComma: 'es5',
      })
    );
  };

  const onChange = (newCode) => setEditorCode(newCode);

  React.useEffect(() => {
    setIsMounted(true);
    document.addEventListener('keyup', formatOnKey, false);
    return () => document.removeEventListener('keyup', formatOnKey, false);
  }, []);

  if (isMounted && code) {
    return (
      <div className="flex w-full flex-col items-center justify-center">
        <LiveProvider
          code={editorCode}
          theme={syntaxTheme}
          scope={scope}
          noInline={noInline}
        >
          <LivePreview className="w-full rounded-md bg-white/50 p-2 backdrop-blur-lg dark:bg-gray-900/50" />
          <div
            className={cn(
              'relative mt-4 flex w-full flex-col items-center justify-center rounded-md p-2',
              {
                'bg-[#1E1E1E]': theme === 'dark',
                'bg-[#FFFFFF]': theme === 'light',
              }
            )}
          >
            <div className="absolute top-3 right-3 flex items-center justify-center gap-2">
              <button
                className="custom-focus-offset min-w-[4rem] select-none rounded-md border-2 border-indigo-200 bg-gray-50 px-4 py-1 text-xs font-bold uppercase text-indigo-600 hover:border-sky-400 hover:text-sky-400 dark:border-indigo-600 dark:bg-gray-800 dark:text-indigo-200 dark:hover:border-sky-300 dark:hover:text-sky-300"
                onClick={formatCode}
                type="button"
              >
                Format
              </button>
              <button
                type="button"
                onClick={copy}
                className="custom-focus-offset min-w-[4rem] select-none rounded-md border-2 border-indigo-200 bg-gray-50 px-4 py-1 text-xs font-bold uppercase text-indigo-600 hover:border-sky-400 hover:text-sky-400 dark:border-indigo-600 dark:bg-gray-800 dark:text-indigo-200 dark:hover:border-sky-300 dark:hover:text-sky-300"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="text-xs font-bold uppercase text-gray-400">
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
