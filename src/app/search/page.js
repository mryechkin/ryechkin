import { Card } from '@wtf-ds/core';
import MiniSearch from 'minisearch';

import Counter from 'src/components/Counter';
import Layout from 'src/components/Layout';
import Posts from 'src/components/Posts';
import Prose from 'src/components/Prose';
import SearchInput from 'src/components/SearchInput';
import Separator from 'src/components/Separator';
import getSearchIndex from 'src/lib/utils/getSearchIndex';

export const metadata = {
  title: 'Search Results',
};

export default async function Search({ searchParams }) {
  const data = await getSearchIndex();

  const { q } = searchParams;
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
  searchClient.addAll(data);

  let results = q && searchClient.search(q);

  if (results?.length) {
    results = results.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return (
    <Layout showHomeButton>
      <Prose>
        <h1 className="retro py-2 text-5xl">Search</h1>
        <SearchInput className="my-4" />
        <Separator />
        {q && (
          <Card className="mx-auto p-8 text-center lg:max-w-3xl">
            {results?.length
              ? `Found ${results.length} results for `
              : 'No results found for'}{' '}
            <b>&quot;{q}&quot;</b>
          </Card>
        )}
      </Prose>
      {results?.length ? (
        <div className="w-full text-center">
          <Posts data={results.map((result) => ({ data: result }))} />
        </div>
      ) : null}
      <div className="my-8 flex items-center justify-center">
        <Counter slug="search" />
      </div>
    </Layout>
  );
}
