import { FiSmile } from 'react-icons/fi';
import Link from 'next/link';

import {
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
        <Prose className="mt-4 text-center lg:max-w-3xl">
          <HeroContainer>
            <div className="text-center lg:max-w-3xl">
              I&apos;m a front-end software engineer based in{' '}
              <span className="whitespace-nowrap">
                <strong>Canada</strong> 🇨🇦
              </span>
              <br />
              I write code for a living, drink more coffee than I probably should, and
              listen to a lot of electronic music in the process <RickRoll />
              <div className="flex items-center justify-center mt-2">
                <Link href="/about">
                  <a>
                    Find out <strong>more</strong> &rarr;
                  </a>
                </Link>
              </div>
            </div>
          </HeroContainer>
        </Prose>
        <Separator />
        <h1 className="title">Latest Post</h1>
        <Posts data={posts} preview />
        <div className="flex items-center justify-end mt-4">
          <Link href="/blog">
            <a className="text-lg font-medium hover:text-sky-500 focus:text-sky-500 dark:hover:text-sky-300 dark:focus:text-sky-300">
              <strong>Read</strong> all posts &rarr;
            </a>
          </Link>
        </div>
        <Separator />
        <h1 className="title">Latest Video</h1>
        <Videos preview />
        <div className="flex items-center justify-end mt-4">
          <Link href="/videos">
            <a className="text-lg font-medium hover:text-sky-500 focus:text-sky-500 dark:hover:text-sky-300 dark:focus:text-sky-300">
              <strong>Watch</strong> all videos &rarr;
            </a>
          </Link>
        </div>
        <div className="inline-flex items-center justify-center w-full mt-8">
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
