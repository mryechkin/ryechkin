import { FiSmile } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

import Counter from 'src/components/Counter';
import HeroContainer from 'src/components/HeroContainer';
import Layout from 'src/components/Layout';
import Posts from 'src/components/Posts';
import Prose from 'src/components/Prose';
import RickRoll from 'src/components/RickRoll';
import SEO from 'src/components/SEO';
import Separator from 'src/components/Separator';
import Videos from 'src/components/Videos';
import { getAllPosts } from 'src/lib/data';
import { useConfetti } from 'src/lib/hooks';

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
            <div className="flex flex-col items-center justify-between md:flex-row lg:max-w-3xl">
              <div className="flex flex-col gap-4 pr-0 md:pr-4 md:text-left">
                <div className="inline-block">
                  I&apos;m a <span className="font-semibold">UX Engineer</span> based in{' '}
                  <span className="font-semibold">Canada</span>.
                </div>
                <div className="inline-block">
                  I write code for a living, drink more coffee than I probably should, and
                  listen to a lot of electronic music in the process. <RickRoll />
                </div>
                <div className="mt-2 flex items-center justify-center gap-2 md:justify-start">
                  <Link href="/about" prefetch={false} className="font-bold">
                    About Me
                  </Link>
                  &rarr;
                </div>
              </div>
              <Image
                src="/assets/headshot-pixelated.jpg"
                className="!my-0 box-content hidden aspect-square h-32 w-32 rounded-full bg-gradient-to-br from-blue-600 to-yellow-300 p-1 md:block"
                width={392}
                height={392}
              />
            </div>
          </HeroContainer>
        </Prose>
        <Separator />
        <h1 className="title">Latest Posts</h1>
        <Posts data={posts} limit={4} preview />
        <div className="my-8 flex items-center justify-center sm:justify-end">
          <Link
            href="/blog"
            prefetch={false}
            className="text-lg font-medium hover:text-sky-500 focus:text-sky-500 dark:hover:text-sky-300 dark:focus:text-sky-300"
          >
            See <strong>all posts</strong> &rarr;
          </Link>
        </div>
        <Separator />
        <h1 className="title">Popular Videos</h1>
        <Videos preview sorted />
        <div className="my-8 flex items-center justify-center sm:justify-end">
          <Link
            href="/videos"
            prefetch={false}
            className="text-lg font-medium hover:text-sky-500 focus:text-sky-500 dark:hover:text-sky-300 dark:focus:text-sky-300"
          >
            See <strong>all videos</strong> &rarr;
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
