import { FiSmile } from 'react-icons/fi';

import ExternalLink from './ExternalLink';
import RickRoll from './RickRoll';
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
      'Babel',
      'Rollup',
      'Supabase',
      'Storybook',
      'TailwindCSS',
      '...more',
    ]}
  />
);

export default {
  FiSmile,
  ExternalLink,
  RickRoll,
  Tags,
  Technologies,
};
