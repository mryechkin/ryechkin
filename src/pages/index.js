import { FiSmile } from 'react-icons/fi';
import Link from 'next/link';

import Counter from '@/components/Counter';
import HeroContainer from '@/components/HeroContainer';
import Layout from '@/components/Layout';
import Posts from '@/components/Posts';
import Prose from '@/components/Prose';
import RickRoll from '@/components/RickRoll';
import SEO from '@/components/SEO';
import Separator from '@/components/Separator';
import Videos from '@/components/Videos';

import { getAllPosts } from '@/lib/data';
import { useConfetti } from '@/lib/hooks';

export default function Home({ posts }) {
  const [confetti] = useConfetti();

  return (
    <Layout confetti={confetti}>
      <SEO title="Home" />
      <div className="inline-flex w-full items-end justify-center">
        <div className="w-full max-w-3xl shrink-0 font-sans text-4xl font-bold tracking-tighter sm:text-center sm:text-5xl md:text-6xl">
          <span className="flex flex-wrap items-center justify-center">
            <span className="flex items-center justify-center p-2 text-yellow-500 dark:text-yellow-300">
              Hey, I&apos;m
            </span>
            <span className="retro ml-1 inline-flex sm:ml-2">Mykhaylo.</span>
          </span>
        </div>
      </div>
      <div className="mx-auto items-center justify-center">
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
              <div className="mt-2 flex items-center justify-center">
                <Link href="/about" prefetch={false}>
                  <a>
                    More <strong>about me</strong> &rarr;
                  </a>
                </Link>
              </div>
            </div>
          </HeroContainer>
        </Prose>
        <Separator />
        <h1 className="title">Latest Posts</h1>
        <Posts data={posts} preview />
        <div className="my-8 flex items-center justify-center sm:justify-end">
          <Link href="/blog" prefetch={false}>
            <a className="text-lg font-medium hover:text-sky-500 focus:text-sky-500 dark:hover:text-sky-300 dark:focus:text-sky-300">
              See <strong>all posts</strong> &rarr;
            </a>
          </Link>
        </div>
        <Separator />
        <h1 className="title">Latest Video</h1>
        <Videos preview />
        <div className="my-8 flex items-center justify-center sm:justify-end">
          <Link href="/videos" prefetch={false}>
            <a className="text-lg font-medium hover:text-sky-500 focus:text-sky-500 dark:hover:text-sky-300 dark:focus:text-sky-300">
              See <strong>all videos</strong> &rarr;
            </a>
          </Link>
        </div>
        <div className="mt-8 inline-flex w-full items-center justify-center">
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
