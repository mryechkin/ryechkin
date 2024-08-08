import { cache } from 'react';

import { getAllDataByPath } from 'src/lib/data';

import 'server-only';

const getSearchIndex = cache(async () => {
  const data = getAllDataByPath('src/data/blog');
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
