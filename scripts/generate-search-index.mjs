/* eslint-disable no-console */
/**
 * Build-time script to generate a search index from all MDX documentation files.
 *
 * This script:
 * 1. Reads all MDX files from src/data/blog and src/data/snippets directories
 * 2. Parses each MDX file to extract title, headings, and content
 * 3. Generates a JSON search index file that can be loaded client-side
 *
 * Run with: node scripts/generate-search-index.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { decodeHTML } from 'entities';
import GithubSlugger from 'github-slugger';
import matter from 'gray-matter';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const ROOT_DIR = path.resolve(dirname, '..');

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

/**
 * Strips MDX/Markdown syntax to get plain text content
 */
function stripMarkdown(content) {
  const stripped = content
    // Remove frontmatter
    .replace(/^---[\s\S]*?---/m, '')
    // Remove code blocks entirely (including content)
    .replace(/```[\w]*\n?[\s\S]*?```/g, '')
    // Remove inline code markers but keep content
    .replace(/`([^`]+)`/g, '$1')
    // Remove JSX/HTML tags
    .replace(/<[^>]+>/g, '')
    // Remove import statements
    .replace(/^import\s+.*$/gm, '')
    // Remove export statements
    .replace(/^export\s+.*$/gm, '')
    // Remove headings markers but keep text
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic markers
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    // Remove links but keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove images
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
    // Remove horizontal rules
    .replace(/^[-*_]{3,}$/gm, '')
    // Remove blockquotes markers
    .replace(/^>\s+/gm, '')
    // Remove list markers
    .replace(/^[\s]*[-*+]\s+/gm, '')
    .replace(/^[\s]*\d+\.\s+/gm, '')
    // Remove table syntax
    .replace(/\|/g, ' ')
    .replace(/^[-:]+$/gm, '')
    // Remove MDX component syntax like {props.something}
    .replace(/\{[^}]+\}/g, '')
    // Remove multiple spaces
    .replace(/[ \t]+/g, ' ')
    // Remove multiple newlines
    .replace(/\n{3,}/g, '\n\n')
    // Remove leading/trailing whitespace per line
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join(' ')
    // Remove leading/trailing whitespace
    .trim();

  // Decode HTML entities using 'entities' library
  return decodeHTML(stripped);
}

/**
 * Extracts headings from MDX content
 */
function extractHeadings(content) {
  const slugger = new GithubSlugger();
  const headingLines = content.split('\n').filter((line) => line.match(/^#{2,3}\s/));

  return headingLines.map((raw) => {
    const level = raw.match(/^#+/)[0].length;
    const text = raw.replace(/^#{1,6}\s+/, '').trim();
    const id = slugger.slug(text);
    return { text, level, id };
  });
}

/**
 * Creates a content excerpt for search results
 */
function createExcerpt(content, maxLength = 200) {
  const plainText = stripMarkdown(content);
  if (plainText.length <= maxLength) {
    return plainText;
  }
  return `${plainText.slice(0, maxLength).trim()}...`;
}

/**
 * Processes a single MDX file
 */
function processPage({ category, filePath, slug }) {
  try {
    if (!fs.existsSync(filePath)) {
      console.warn(`Warning: File not found: ${filePath}`);
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content, data: frontmatter } = matter(fileContent);

    const headings = extractHeadings(content);
    const plainContent = stripMarkdown(content);
    const excerpt = createExcerpt(content);
    const routePath = `/${category}/${slug}`;

    return {
      id: routePath,
      title: frontmatter.title || slug,
      path: routePath,
      excerpt,
      // Include headings for section-level search
      headings: headings.map((h) => ({
        text: h.text,
        id: h.id,
        anchor: `${routePath}#${h.id}`,
      })),
      // Full content for deep search (stripped of markdown)
      content: plainContent,
      // Metadata for display
      category,
      // Optional tags for search
      tags: frontmatter.tags || [],
    };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Main function to generate the search index
 */
function generateSearchIndex() {
  console.log('Generating search index...\n');

  // Get all MDX files from blog and snippets directories
  const blogFiles = getMdxFiles('blog');
  const snippetFiles = getMdxFiles('snippets');
  const allFiles = [...blogFiles, ...snippetFiles];

  // Process each file
  const searchIndex = allFiles
    .map((file) => processPage(file))
    .filter((page) => page !== null);

  // Write the search index to a JSON file
  const outputPath = path.join(ROOT_DIR, 'public/search-index.json');
  fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2));

  console.log(
    '\x1b[1;92m✔\x1b[0m',
    `Search index generated with ${searchIndex.length} pages in ${outputPath}`,
  );
}

// Run the script
generateSearchIndex();
