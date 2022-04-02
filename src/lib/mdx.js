import mdxPrism from 'mdx-prism';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

export async function getMdxSource(post) {
  return serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        mdxPrism,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            properties: { class: 'anchor', ariaHidden: true, tabIndex: -1 },
          },
        ],
      ],
    },
    scope: post.data,
  });
}
