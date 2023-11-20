/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Card as WTFCard } from '@wtf-ds/core';
import cn from 'classnames';
import Link from 'next/link';
import { FaExclamation } from 'react-icons/fa';
import { FiSmile } from 'react-icons/fi';

import Caption from './Caption';
import Card from './Card';
import CodeBlock from './CodeBlockDynamic';
import ExternalLink from './ExternalLink';
import Separator from './Separator';
import Spinner from './Spinner';
import Stack from './Stack';
import SyntaxHighlighter from './SyntaxHighlighter';
import Tags from './Tags';

const CustomLink = (props) => {
  const { children, href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} prefetch={false} {...props}>
        {children}
      </Link>
    );
  }

  return <ExternalLink {...props} />;
};

const ImageCard = ({ alt, className, ...props }) => (
  <>
    <img
      className={cn('mx-auto flex w-full max-w-4xl', className)}
      alt={alt}
      {...props}
    />
    {alt && <Caption>{alt}</Caption>}
  </>
);

const Warning = ({ children }) => (
  <blockquote className="!border-l-rose-500">
    <div className="mb-4 flex items-center justify-start gap-1">
      <FaExclamation className="text-xl font-bold text-rose-500" />
      <b>IMPORTANT</b>
    </div>
    {children}
  </blockquote>
);

const MDX = {
  a: CustomLink,
  hr: Separator,
  img: ImageCard,
  Card,
  CodeBlock,
  FiSmile,
  ImageCard,
  pre: (props) => {
    const { children, filename, live, ...rest } = props;
    const childProps = children?.props;
    const code = childProps?.children;
    const language = childProps?.className?.replace(/language-/, '').trim();

    return live ? (
      <CodeBlock {...rest}>{code}</CodeBlock>
    ) : (
      <SyntaxHighlighter code={code} filename={filename} language={language} {...rest} />
    );
  },
  Stack,
  Spinner,
  Tags,
  Warning,
  WTFCard,
  ...React,
};

export default MDX;
