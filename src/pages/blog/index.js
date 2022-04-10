import { Counter, Layout, Posts, Prose, SEO, Separator } from '@/components';
import { getAllPosts } from '@/lib/data';

export default function Blog({ posts }) {
  return (
    <Layout>
      <SEO title="Blog" />
      <Prose>
        <h1 className="py-2 text-5xl retro">Blog</h1>
        <div className="text-center lg:max-w-3xl">
          I write about modern web development, design systems and stuff I&apos;ve
          recently learned, used, or just simply find interesting.
        </div>
      </Prose>
      <div className="pb-4 mt-8">
        <Posts data={posts} />
      </div>
      <Separator />
      <div className="flex items-center justify-center py-8">
        <Counter slug="blog" />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
