import { Card } from '@wtf-ds/core';

import Counter from 'src/components/Counter';
import Layout from 'src/components/Layout';
import Posts from 'src/components/Posts';
import Prose from 'src/components/Prose';
import Separator from 'src/components/Separator';
// import { WTFCard } from 'src/components/WTF';
import { getAllPosts } from 'src/lib/data';

export const metadata = {
  title: 'Mykhaylo Ryechkin | Blog',
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <Layout>
      <Prose>
        <h1 className="retro py-2 text-5xl">Blog</h1>
        <Card className="p-8 text-center lg:max-w-3xl">
          I write about modern web development, design systems and stuff I&apos;ve
          recently learned, used, or just simply find interesting.
        </Card>
      </Prose>
      <Separator />
      <div className="my-8 pb-4">
        <Posts data={posts} />
      </div>
      <div className="flex items-center justify-center py-8">
        <Counter slug="blog" />
      </div>
    </Layout>
  );
}
