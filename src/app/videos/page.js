import { Card } from '@wtf-ds/core';

import Counter from 'src/components/Counter';
import Layout from 'src/components/Layout';
import Prose from 'src/components/Prose';
import Separator from 'src/components/Separator';
import Videos from 'src/components/Videos';

export const metadata = {
  title: 'Mykhaylo Ryechkin | Videos',
};

export default function VideosPage() {
  return (
    <Layout>
      <Prose>
        <h1 className="retro py-2 text-5xl">Video Tutorials</h1>
        <Card className="p-8 text-center lg:max-w-3xl [&>p]:my-1">
          <p>Here you will find some of my coding tutorials.</p>
          <p>
            Most of these are things I&apos;ve had to learn at some point, and wanted to
            share with others while it was fresh in my mind.
          </p>
        </Card>
      </Prose>
      <Separator />
      <div className="my-8 pb-4">
        <Videos sorted />
      </div>
      <div className="flex items-center justify-center py-8">
        <Counter slug="videos" />
      </div>
    </Layout>
  );
}
