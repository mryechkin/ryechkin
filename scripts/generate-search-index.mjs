/* eslint-disable no-console */
/**
 * Build-time script to generate a search index from all MDX documentation files.
 *
 * This script:
 * 1. Reads all MDX files from src/data/blog and src/data/snippets directories
 * 2. Parses each MDX file to extract title, headings, and content
 * 3. Writes a JSON search index that is read server-side by src/lib/search.js
 *
 * Run with: node scripts/generate-search-index.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import GithubSlugger from 'github-slugger';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { remark } from 'remark';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const ROOT_DIR = path.resolve(dirname, '..');
const OUTPUT_PATH = path.join(ROOT_DIR, '.generated/search-index.json');

const mdProcessor = remark().use(remarkGfm).use(remarkEmoji);
const mdxProcessor = remark().use(remarkMdx).use(remarkGfm).use(remarkEmoji);

// Nodes whose content should never end up in the searchable text
const SKIP_NODES = new Set([
  'code',
  'html',
  'image',
  'imageReference',
  'mdxjsEsm',
  'mdxFlowExpression',
  'mdxTextExpression',
]);

const TEXT_BLOCKS = new Set(['heading', 'paragraph', 'tableCell']);

/**
 * Gets all MDX/MD files from a directory
 */
function getMdxFiles(directory) {
  const dirPath = path.join(ROOT_DIR, 'src/data', directory);
  if (!fs.existsSync(dirPath)) {
    console.warn(`Warning: Directory not found: ${dirPath}`);
    return [];
  }

  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => ({
      filePath: path.join(dirPath, file),
      slug: file.replace(/\.mdx?$/, ''),
      category: directory,
    }));
}

function parse(content, filePath) {
  const processor = filePath.endsWith('.mdx') ? mdxProcessor : mdProcessor;
  return processor.runSync(processor.parse(content));
}

/**
 * Plain text of a node, matching what rehype-slug sees for headings
 */
function toText(node) {
  if (SKIP_NODES.has(node.type)) {
    return '';
  }
  if (node.type === 'text' || node.type === 'inlineCode') {
    return node.value;
  }
  return node.children ? node.children.map(toText).join('') : '';
}

function collectText(node, out = []) {
  if (SKIP_NODES.has(node.type)) {
    return out;
  }
  if (TEXT_BLOCKS.has(node.type)) {
    out.push(toText(node));
    return out;
  }
  node.children?.forEach((child) => collectText(child, out));
  return out;
}

/**
 * Slugs every heading in document order (like rehype-slug) so duplicate
 * suffixes line up with the rendered page, but only returns H2/H3.
 */
function collectHeadings(node, slugger = new GithubSlugger(), out = []) {
  if (node.type === 'heading') {
    const text = toText(node).trim();
    const id = slugger.slug(text);
    if (node.depth === 2 || node.depth === 3) {
      out.push({ text, id });
    }
    return out;
  }
  node.children?.forEach((child) => collectHeadings(child, slugger, out));
  return out;
}

/**
 * Processes a single MDX file
 */
function processPage({ category, filePath, slug }) {
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data: frontmatter } = matter(source);

  if (frontmatter.published === false) {
    return null;
  }

  const tree = parse(content, filePath);
  const routePath = `/${category}/${slug}`;

  return {
    id: routePath,
    slug,
    path: routePath,
    category,
    title: frontmatter.title || slug,
    summary: frontmatter.summary || '',
    tags: frontmatter.tags || [],
    date: frontmatter.date ?? null,
    readingTime: readingTime(source).text,
    headings: collectHeadings(tree).map(({ id, text }) => ({
      text,
      id,
      anchor: `${routePath}#${id}`,
    })),
    content: collectText(tree).join(' ').replace(/\s+/g, ' ').trim(),
  };
}

function generateSearchIndex() {
  console.log('Generating search index...\n');

  const allFiles = [...getMdxFiles('blog'), ...getMdxFiles('snippets')];

  const searchIndex = allFiles.map((file) => processPage(file)).filter(Boolean);

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(searchIndex));

  console.log(
    '\x1b[1;92m✔\x1b[0m',
    `Search index generated with ${searchIndex.length} pages in ${OUTPUT_PATH}`,
  );
}

generateSearchIndex();
