import React from 'react';
import { FiSmile } from 'react-icons/fi';
import Image from 'next/future/image';
import Link from 'next/link';

import Caption from './Caption';
import Card from './Card';
import CodeBlock from './CodeBlock';
import ExternalLink from './ExternalLink';
import KyloRen from './KyloRen';
import PeaceSign from './PeaceSign';
import PostImage from './PostImage';
import RickRoll from './RickRoll';
import Separator from './Separator';
import SyntaxHighlighter from './SyntaxHighlighter';
import Tags from './Tags';

function CustomLink(props) {
  const { children, href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{children}</a>
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
