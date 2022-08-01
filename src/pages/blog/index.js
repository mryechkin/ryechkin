import Counter from '@/components/Counter';
import HeroContainer from '@/components/HeroContainer';
import Layout from '@/components/Layout';
import Posts from '@/components/Posts';
import Prose from '@/components/Prose';
import SEO from '@/components/SEO';
import Separator from '@/components/Separator';

import { getAllPosts } from '@/lib/data';

export default function Blog({ posts }) {
  return (
    <Layout>
      <SEO title="Blog" />
      <Prose>
        <h1 className="retro py-2 text-5xl">Blog</h1>
        <HeroContainer>
          <div className="text-center lg:max-w-3xl">
            I write about modern web development, design systems and stuff I&apos;ve
            recently learned, used, or just simply find interesting.
          </div>
        </HeroContainer>
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

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
