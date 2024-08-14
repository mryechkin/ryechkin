import { Card } from '@wtf-ds/core';

import Counter from 'src/components/Counter';
import Layout from 'src/components/Layout';
import Posts from 'src/components/Posts';
import Prose from 'src/components/Prose';
import SearchInput from 'src/components/SearchInput';
import Separator from 'src/components/Separator';
import SearchIndex from 'src/lib/search';

export const metadata = {
  title: 'Mykhaylo Ryechkin | Search',
};

export default async function Search({ searchParams }) {
  const { q } = searchParams;

  let results = q && SearchIndex.search(q);

  if (results?.length) {
    results = results.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return (
    <Layout showHomeButton>
      <Prose>
        <h1 className="retro py-2 text-5xl">Search</h1>
        <SearchInput />
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
