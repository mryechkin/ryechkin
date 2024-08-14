import MiniSearch from 'minisearch';

import { getAllDataByPath } from 'src/lib/data';

function getSearchIndex() {
  const data = getAllDataByPath('src/data/blog');

  const searchClient = new MiniSearch({
    fields: ['title', 'tags', 'summary'], // fields to index for full-text search
    storeFields: [
      'author',
      'canonical',
      'date',
      'modified',
      'readingTime',
      'slug',
      'summary',
      'tags',
      'title',
    ], // fields to return with search results
    searchOptions: {
      // Set weights of the fields in our data
      boost: { tags: 3, title: 2, summary: 1 },
      // Prefix search (ie. "moto" will match "motorcycle")
      prefix: true,
      // Higher number means terms can be less accurate
      fuzzy: 0.25,
      idField: 'slug',
    },
  });

  searchClient.addAll(
    data.map((post) => ({
      ...post.data,
      id: post.data?.slug,
      source: post.source,
    })),
  );

  return searchClient;
}

const SearchIndex = getSearchIndex();

export default SearchIndex;
