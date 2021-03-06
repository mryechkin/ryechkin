import { FiSmile } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

import ExternalLink from './ExternalLink';
import PeaceSign from './PeaceSign';
import RickRoll from './RickRoll';
import Separator from './Separator';
import Tags from './Tags';

const Technologies = () => (
  <Tags
    className="mt-4"
    list={[
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'GraphQL',
      'PostgreSQL',
      'Babel',
      'Rollup',
      'Storybook',
      'TailwindCSS',
      '...more',
    ]}
  />
);

export default {
  hr: Separator,
  ExternalLink,
  FiSmile,
  Image,
  Link,
  PeaceSign,
  RickRoll,
  Tags,
  Technologies,
};
