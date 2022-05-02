import { FiSmile } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

import Caption from './Caption';
import CodeBlock from './CodeBlock';
import ExternalLink from './ExternalLink';
import PeaceSign from './PeaceSign';
import PostImage from './PostImage';
import RickRoll from './RickRoll';
import Separator from './Separator';
import SyntaxHighlighter from './SyntaxHighlighter';

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
  CodeBlock,
  ExternalLink,
  FiSmile,
  Image,
  Link,
  PeaceSign,
  PostImage,
  pre: SyntaxHighlighter,
  RickRoll,
};

export default MDX;
