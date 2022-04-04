import fs from 'fs';
import { join } from 'path';

import { parseISO } from 'date-fns';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const dataDirectory = join(process.cwd(), 'data');
const postsDirectory = join(process.cwd(), 'data/posts');

export function getDataBySlug(slug, directory = dataDirectory) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(directory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    data: {
      ...data,
      readingTime: readingTime(fileContents),
      slug: realSlug,
    },
    content,
  };
}

export function getPostBySlug(slug) {
  return getDataBySlug(slug, postsDirectory);
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs.map((slug) => getPostBySlug(slug));
  return posts.sort(
    (a, b) =>
      // sort by date
      parseISO(b.data.date) - parseISO(a.data.date)
  );
}
