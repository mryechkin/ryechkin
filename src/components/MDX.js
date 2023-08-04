/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaExclamation } from 'react-icons/fa';
import { FiSmile } from 'react-icons/fi';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import AnimatedPath from './snippets/AnimatedPath';
import Caption from './Caption';
import ExternalLink from './ExternalLink';
import Spinner from './Spinner';
import Stack from './Stack';

const Card = dynamic(() => import('./Card'), { loading: () => <Spinner /> });
const CodeBlock = dynamic(() => import('./CodeBlock'), {
  loading: () => <Spinner />,
});
const KyloRen = dynamic(() => import('./KyloRen'), {
  loading: () => <Spinner />,
});
const PeaceSign = dynamic(() => import('./PeaceSign'), {
  loading: () => <Spinner />,
});
const PostImage = dynamic(() => import('./PostImage'), {
  loading: () => <Spinner />,
});
const RickRoll = dynamic(() => import('./RickRoll'), {
  loading: () => <Spinner />,
});
const Separator = dynamic(() => import('./Separator'), {
  loading: () => <Spinner />,
});
const SyntaxHighlighter = dynamic(() => import('./SyntaxHighlighter'), {
  loading: () => <Spinner />,
});
const Tags = dynamic(() => import('./Tags'), { loading: () => <Spinner /> });

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
      className={cn(
        'border-outline mx-auto flex w-full max-w-4xl shadow-retro dark:shadow-retro-dark',
        className,
      )}
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
  AnimatedPath,
  Caption,
  Card,
  CodeBlock,
  ExternalLink,
  FiSmile,
  Image,
  ImageCard,
  KyloRen,
  Link,
  PeaceSign,
  PostImage,
  pre: (props) =>
    props.live ? <CodeBlock {...props} /> : <SyntaxHighlighter {...props} />,
  RickRoll,
  Separator,
  Stack,
  Tags,
  Warning,
  ...React,
};

export default MDX;
