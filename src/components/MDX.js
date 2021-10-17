import { FiSmile } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

import Caption from './Caption';
import ExternalLink from './ExternalLink';
import PeaceSign from './PeaceSign';
import PostImage from './PostImage';
import RickRoll from './RickRoll';
import Separator from './Separator';

const MDX = {
  a: ExternalLink,
  hr: Separator,
  Caption,
  ExternalLink,
  FiSmile,
  Image,
  Link,
  PeaceSign,
  PostImage,
  RickRoll,
};

export default MDX;
