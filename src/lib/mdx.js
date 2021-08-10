// import { FiSmile } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import { serialize } from 'next-mdx-remote/serialize';

// import { ExternalLink, RickRoll, Tags } from '@/components';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
// export const components = {
//   ExternalLink,
//   RickRoll,
//   Tags,
//   FiSmile,
// };

export async function getMdxSource(post) {
  return serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: post.data,
  });
}
