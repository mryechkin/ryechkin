import { Card } from '@wtf-ds/core';

import Counter from 'src/components/Counter';
import Layout from 'src/components/Layout';
import Prose from 'src/components/Prose';
import SEO from 'src/components/SEO';
import Separator from 'src/components/Separator';
import Videos from 'src/components/Videos';

export default function VideosPage() {
  return (
    <Layout>
      <SEO title="Videos" />
      <Prose>
        <h1 className="retro py-2 text-5xl">Video Tutorials</h1>
        <Card>
          <div className="text-center lg:max-w-3xl [&>p]:my-1">
            <p>Here you will find some of my coding tutorials.</p>
            <p>
              Most of these are things I&apos;ve had to learn at some point, and wanted to
              share with others while it was fresh in my mind.
            </p>
          </div>
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
