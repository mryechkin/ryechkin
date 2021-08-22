import { FiSmile } from 'react-icons/fi';

import ExternalLink from './ExternalLink';
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
  FiSmile,
  ExternalLink,
  RickRoll,
  Tags,
  Technologies,
};
