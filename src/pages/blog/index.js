import { Layout, Posts, Prose, SEO } from '@/components';
import { getAllPosts } from '@/lib/data';

export default function Blog({ posts }) {
  return (
    <Layout slug="blog">
      <SEO title="Blog" />
      <Prose>
        <h1 className="retro py-2 text-5xl">Blog</h1>
        <div className="text-center lg:max-w-3xl">
          I write about modern web development, design systems and stuff I&apos;ve
          recently learned, used, or just simply find interesting.
        </div>
      </Prose>
      <div className="mt-8 pb-4">
        <Posts data={posts} />
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
