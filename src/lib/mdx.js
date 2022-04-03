import mdxPrism from 'mdx-prism';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeSlug from 'rehype-slug';

export async function getMdxSource(post) {
  return serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            properties: { class: 'anchor', ariaHidden: true, tabIndex: -1 },
          },
        ],
        mdxPrism,
      ],
    },
    scope: post.data,
  });
}
