import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

const dataDirectory = join(process.cwd(), 'data');
const postsDirectory = join(process.cwd(), 'data/posts');

export function getDataBySlug(slug, directory = dataDirectory) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(directory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { data: { ...data, slug: realSlug }, content };
}

export function getPostBySlug(slug) {
  return getDataBySlug(slug, postsDirectory);
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  return slugs.map((slug) => getPostBySlug(slug));
}
