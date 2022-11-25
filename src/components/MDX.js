import React from 'react';
import { FiSmile } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import ExternalLink from './ExternalLink';
import Spinner from './Spinner';

const Caption = dynamic(() => import('./Caption'), {
  loading: () => <Spinner />,
});
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

function CustomLink(props) {
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
}

const MDX = {
  a: CustomLink,
  hr: Separator,
  Caption,
  Card,
  CodeBlock,
  ExternalLink,
  FiSmile,
  Image,
  KyloRen,
  Link,
  PeaceSign,
  PostImage,
  pre: (props) =>
    props.live ? <CodeBlock {...props} /> : <SyntaxHighlighter {...props} />,
  RickRoll,
  Separator,
  Tags,
  ...React,
};

export default MDX;
