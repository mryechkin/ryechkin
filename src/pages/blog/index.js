import {
  Counter,
  HeroContainer,
  Layout,
  Posts,
  Prose,
  SEO,
  Separator,
} from '@/components';
import { getAllPosts } from '@/lib/data';

export default function Blog({ posts }) {
  return (
    <Layout>
      <SEO title="Blog" />
      <Prose>
        <h1 className="py-2 text-5xl retro">Blog</h1>
        <HeroContainer>
          <div className="text-center lg:max-w-3xl">
            I write about modern web development, design systems and stuff I&apos;ve
            recently learned, used, or just simply find interesting.
          </div>
        </HeroContainer>
      </Prose>
      <Separator />
      <div className="pb-4 my-8">
        <Posts data={posts} />
      </div>
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
