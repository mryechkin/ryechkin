import fs from 'fs';
import { join } from 'path';

import { parseISO } from 'date-fns';
import GithubSlugger from 'github-slugger';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeSlug from 'rehype-slug';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import { remarkMdxCodeMeta } from 'remark-mdx-code-meta';

export function getRawFile(path) {
  const fullPath = join(process.cwd(), path);
  return fs.readFileSync(fullPath, 'utf8');
}

export function getReadingTime(source) {
  if (!source) {
    return null;
  }
  const { text } = readingTime(source);
  return text;
}

export function getAllPosts() {
  const posts = fs
    .readdirSync(join(process.cwd(), 'src/data/posts'))
    // Only include mdx files
    .filter((path) => /\.mdx$/.test(path));

  const filteredPosts = [];

  posts.forEach((fileName) => {
    const source = getRawFile(`/src/data/posts/${fileName}`);
    const slug = fileName.replace(/\.mdx$/, '');

    // Using gray-matter here as we don't need the entire MDX, just frontmatter
    const { data } = matter(source);

    // Only include drafts when in local dev
    if (data.published || process.env.NEXT_PUBLIC_APP_ENV === 'local') {
      filteredPosts.push({
        data: {
          ...data,
          readingTime: getReadingTime(source),
          slug,
        },
        source,
      });
    }
  });

  return filteredPosts.sort(
    (a, b) =>
      // sort by date
      parseISO(b.data.date) - parseISO(a.data.date)
  );
}

export function getAllSnippets() {
  const snippets = fs
    .readdirSync(join(process.cwd(), 'src/data/snippets'))
    // Only include md(x) files
    .filter((path) => /\.mdx$/.test(path))
    .map((filename) => {
      const source = getRawFile(`/src/data/snippets/${filename}`);
      const slug = filename.replace(/\.mdx?$/, '');
      // Using gray-matter here as we don't need the entire MDX, just frontmatter
      const { data } = matter(source);
      return {
        data: {
          ...data,
          slug,
        },
        source,
      };
    });

  return snippets.sort(
    (a, b) =>
      // sort by date
      parseISO(b.data.date) - parseISO(a.data.date)
  );
}

export async function getMdx(source, addAnchors = true) {
  let rehypePlugins = [rehypeCodeTitles];

  if (addAnchors) {
    rehypePlugins = [
      ...rehypePlugins,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: { class: 'anchor', ariaHidden: true, tabIndex: -1 },
        },
      ],
    ];
  }

  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkMdxCodeMeta, remarkEmoji, remarkGfm],
      rehypePlugins,
    },
    parseFrontmatter: true,
  });
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

  // Transform the string '## Some text' into an object of shape '{ text: 'Some text', level: 2 }'
  return headingLines.map((raw) => {
    const heading = raw.split(' ');
    const level = heading[0]?.length;
    const text = raw.replace(/^###*\s/, '');
    const id = slugger.slug(text);

    return { text, level, id };
  });
}
