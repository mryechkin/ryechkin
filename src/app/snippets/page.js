import { Card as WTFCard } from '@wtf-ds/core';

import Card from 'src/components/Card';
import Counter from 'src/components/Counter';
import Layout from 'src/components/Layout';
import Prose from 'src/components/Prose';
import Separator from 'src/components/Separator';
import { getAllSnippets } from 'src/lib/data';

export default function Snippets() {
  const snippets = getAllSnippets();

  return (
    <Layout showHomeButton>
      <Prose>
        <h1 className="retro py-2 text-5xl">Snippets</h1>
        <WTFCard className="p-8 text-center">
          This is a collection of miscellaneous code snippets, components and hooks that
          don&apos;t have a particular home.
        </WTFCard>
      </Prose>
      <Separator />
      <div className="mx-auto flex max-w-lg flex-col gap-8">
        {snippets?.length
          ? snippets.map((snippet) => {
              const { slug, summary, tags, title } = snippet.data;
              return (
                <Card
                  key={slug}
                  item={{ href: `/snippets/${slug}`, summary, tags, title }}
                />
              );
            })
          : null}
      </div>
      <div className="flex items-center justify-center py-8">
        <Counter slug="snippets" />
      </div>
    </Layout>
  );
}
