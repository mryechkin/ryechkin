import { cache } from 'react';

import 'server-only';

import { getAllPosts } from 'src/lib/data';

const getSearchIndex = cache(async () => {
  const data = getAllPosts();
  return data.map((post) => ({
    ...post.data,
    id: post.data?.slug,
    source: post.source,
  }));
});

export const preloadSearchIndex = () => {
  getSearchIndex();
  return undefined;
};

export default getSearchIndex;
