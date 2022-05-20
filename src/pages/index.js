import { FiSmile } from 'react-icons/fi';

import {
  Card,
  Counter,
  HeroContainer,
  Layout,
  Posts,
  Prose,
  RickRoll,
  SEO,
  Separator,
  Videos,
} from '@/components';
import { getAllPosts } from '@/lib/data';
import { useConfetti } from '@/lib/hooks';

export default function Home({ posts }) {
  const [confetti] = useConfetti();

  return (
    <Layout confetti={confetti}>
      <SEO title="Home" />
      <div className="inline-flex items-end justify-center w-full">
        <div className="flex-shrink-0 w-full max-w-3xl font-sans text-4xl font-bold tracking-tighter sm:text-center sm:text-5xl md:text-6xl">
          <span className="flex flex-wrap items-center justify-center">
            <span className="flex items-center justify-center p-2 text-yellow-500 dark:text-yellow-300">
              Hey, I&apos;m
            </span>
            <span className="inline-flex ml-1 retro sm:ml-2">Mykhaylo.</span>
          </span>
        </div>
      </div>
      <div className="items-center justify-center mx-auto">
        <Prose className="text-center lg:max-w-3xl">
          <HeroContainer title="intro">
            <div className="text-center lg:max-w-3xl">
              I&apos;m a front-end software engineer based in{' '}
              <span className="whitespace-nowrap">
                <strong>Kitchener, Canada</strong> 🇨🇦
              </span>
              <br />
              I write code for a living, drink more coffee than I probably should, and
              listen to a lot of electronic music in the process <RickRoll />
            </div>
          </HeroContainer>
        </Prose>
        <Separator />
        <h1 className="title">Latest Posts</h1>
        <Posts data={posts} />
        <Separator />
        <h1 className="title">Videos</h1>
        <div className="pb-4 md:pb-8">
          <Videos />
        </div>
        <Separator />
        <div className="inline-flex items-center justify-center w-full">
          Thanks for stopping by
          <span className="pl-2 text-2xl text-blue-400 dark:text-rose-400">
            <FiSmile />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center pt-12">
        <Counter slug="index" />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}
