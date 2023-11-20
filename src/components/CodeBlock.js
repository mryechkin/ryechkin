'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card } from '@wtf-ds/core';
import cn from 'classnames/dedupe';
import { useTheme } from 'next-themes';
import { themes } from 'prism-react-renderer';
import { FiCheck } from 'react-icons/fi';
import { SiPrettier } from 'react-icons/si';
import { CodeEditor, useLiveRunner } from 'react-live-runner';

import useTimedToggle from 'src/hooks/useTimedToggle';

import CopyButton from './CopyButton';

// import Spinner from './Spinner';

// const CodeEditor = dynamic(
//   () => import('react-live-runner').then((module) => module.CodeEditor),
//   { loading: Spinner, ssr: false },
// );

const scope = {
  Button,
  CopyButton,
  ...React,
};

const CodeBlock = ({ children, className }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [prettified, setPrettified] = useTimedToggle(false);
  const { theme } = useTheme();

  const initialCode = children.trim();
  const [editorCode, setEditorCode] = useState(initialCode);

  const { code, element, error, onChange } = useLiveRunner({
    initialCode: editorCode,
    scope,
  });

  const formatCode = useCallback(async () => {
    if (!error) {
      try {
        const prettify = (await import('src/lib/utils/prettify')).default;
        const result = await prettify(code);
        const formattedCode = result.slice(0, -1);
        setPrettified(true);
        setEditorCode(formattedCode);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  }, [code, error, setPrettified]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted && initialCode) {
    return (
      <div
        className={cn(
          'not-prose flex w-full flex-col items-center justify-center',
          className,
        )}
      >
        <div className="border-faint w-full rounded-md bg-white/50 p-2 backdrop-blur-lg dark:bg-slate-900/50">
          {element}
        </div>
        <Card
          className={cn('relative mt-4 w-full', {
            'bg-slate-900': theme === 'dark',
            'bg-gray-50': theme === 'light',
          })}
          innerClassName="!p-0"
          title="Editable Example"
          actions={
            <div className="flex items-center justify-center gap-2">
              <Button
                aria-label="Format code"
                disabled={prettified}
                title="Format code"
                onClick={formatCode}
              >
                {prettified ? <FiCheck /> : <SiPrettier />}
              </Button>
              <CopyButton code={editorCode} />
            </div>
          }
        >
          <CodeEditor
            className="w-full"
            onChange={(newCode) => {
              setEditorCode(newCode);
              onChange(newCode);
            }}
            tabIndex={-1}
            value={editorCode}
            theme={theme === 'dark' ? themes.nightOwl : themes.github}
          />
        </Card>
        {error && (
          <pre className="!mt-4 w-full !rounded border-2 border-red-600 bg-red-50 p-2 text-red-600">
            {error}
          </pre>
        )}
      </div>
    );
  }
  return null;
};

export default CodeBlock;
