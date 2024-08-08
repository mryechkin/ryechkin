import GithubSlugger from 'github-slugger';
import { compileMDX as compileMDXRsc } from 'next-mdx-remote/rsc';
import { serialize as serializeMDX } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import rehypeSlug from 'rehype-slug';
import { remark } from 'remark';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';

export async function compileMDX({ components = {}, scope, source }) {
  const { content, frontmatter } = await compileMDXRsc({
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins,
        remarkPlugins,
      },
      scope,
    },
    source,
  });

  return { content, frontmatter };
}

/**
 * Extracts headings from MDX files (levels H2 and above)
 * @param {string} source - File source
 * @return {Array.<object>}
 */
export async function getHeadings(source) {
  const slugger = new GithubSlugger();

  // Get each line individually, and filter out anything that isn't a heading
  const headingLines = source.split('\n').filter((line) => line.match(/^###*\s/));

  // Transform the string '## Some text :rocket:' into an object { text: 'Some text 🚀', level: 2 }
  const headings = headingLines.map(async (raw) => {
    const heading = raw.split(' ');
    const level = heading[0]?.length;
    const rawText = raw.replace(/^###*\s/, '');
    const withEmojis = await remark().use(remarkEmoji).process(rawText);
    const text = String(withEmojis);
    const id = slugger.slug(text);

    return { text, level, id };
  });

  const result = await Promise.all(headings);

  return result;
}

export const rehypePlugins = [
  rehypeCodeTitles,
  rehypeMdxCodeProps,
  rehypeSlug,
  [
    rehypeAutolinkHeadings,
    {
      behavior: 'append',
      properties: { class: 'anchor', ariaHidden: true, tabIndex: -1 },
    },
  ],
];

export const remarkPlugins = [remarkEmoji, remarkGfm, remarkUnwrapImages];

export async function serialize(source) {
  return serializeMDX(source, {
    mdxOptions: {
      remarkPlugins,
      rehypePlugins,
    },
    parseFrontmatter: true,
  });
}
