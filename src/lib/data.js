import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

import { parseISO } from 'date-fns';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export function getAllDataByPath(basePath, sort = true) {
  const files = readdirSync(join(process.cwd(), basePath));
  const items = files
    .filter((path) => /\.mdx?$/.test(path)) // Only include md(x) files
    .map((filename) => {
      const source = getRawFile(`${basePath}/${filename}`);
      const slug = filename.replace(/\.mdx?$/, '');

      // Using gray-matter here as we don't need the entire MDX, just frontmatter
      const { data } = matter(source);

      return {
        data: {
          ...data,
          readingTime: getReadingTime(source),
          slug,
        },
        source,
      };
    });

  if (sort && items) {
    return items.sort(
      (a, b) =>
        // sort by date
        parseISO(b.data.date) - parseISO(a.data.date),
    );
  }

  return items;
}

/**
 * Reads the file at specified path
 * @param {string} path - Path of file to read
 */
export function getRawFile(path) {
  const fullPath = join(process.cwd(), path);
  return readFileSync(fullPath, 'utf8');
}

export function getReadingTime(source) {
  if (!source) {
    return null;
  }
  const { text } = readingTime(source);
  return text;
}
