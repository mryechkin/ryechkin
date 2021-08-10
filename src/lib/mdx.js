import mdxPrism from 'mdx-prism';
import { serialize } from 'next-mdx-remote/serialize';

export async function getMdxSource(post) {
  return serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [mdxPrism],
    },
    scope: post.data,
  });
}
