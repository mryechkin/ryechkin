/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { SiPrettier } from 'react-icons/si';
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
import Button from './Button';
import Card from './Card';
import CopyButton from './CopyButton';
import Counter from './Counter';
import DarkModeToggle from './DarkModeToggle';
import ExternalLink from './ExternalLink';
import KyloRen from './KyloRen';
import { Box, Col, Hide, Row, Show } from './Primitives';

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

const CodeBlock = ({ children: rootChildren, noInline = false }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const { children } = rootChildren.props;
  const code = children.trim();
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
      prettier
        .format(currentCode, {
          parser: 'babel',
          plugins: [babelParser],
          trailingComma: 'es5',
        })
        .slice(0, -1)
    );
  };

  const onChange = (newCode) => setEditorCode(newCode.trim());

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
          <LivePreview className="w-full rounded-md bg-white/50 p-2 backdrop-blur-lg dark:bg-slate-900/50" />
          <div
            className={cn(
              'relative mt-4 flex w-full flex-col items-center justify-center rounded-md p-2',
              {
                'bg-[#1E1E1E]': theme === 'dark',
                'bg-[#FFFFFF]': theme === 'light',
              }
            )}
          >
            <div className="absolute right-3 top-3 flex items-center justify-center gap-2">
              <Button aria-label="Format code" title="Format code" onClick={formatCode}>
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
