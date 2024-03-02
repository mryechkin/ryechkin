import Image from 'next/image';
import Link from 'next/link';
import { FiSmile } from 'react-icons/fi';

import Counter from 'src/components/Counter';
import Layout from 'src/components/Layout';
import Posts from 'src/components/Posts';
import Prose from 'src/components/Prose';
import RickRoll from 'src/components/RickRoll';
import Separator from 'src/components/Separator';
import Sparkles from 'src/components/Sparkles';
import Stack from 'src/components/Stack';
import Videos from 'src/components/Videos';
import { WTFCard } from 'src/components/WTF';
import { getAllPosts } from 'src/lib/data';

export default function Home() {
  const posts = getAllPosts();

  return (
    <Layout className="!max-w-[96rem]">
      <div className="inline-flex w-full items-end justify-center">
        <div className="w-full max-w-3xl shrink-0 font-sans text-4xl font-bold tracking-tighter sm:text-center md:text-5xl">
          <span className="flex flex-wrap items-center justify-center">
            <span className="flex items-center justify-center p-2 text-yellow-500 dark:text-yellow-300">
              Hey, I&apos;m
            </span>
            <span className="retro ml-1 inline-flex md:ml-2">Mykhaylo.</span>
          </span>
        </div>
      </div>
      <div className="mx-auto items-center justify-center">
        <Prose className="mt-1 text-center md:mt-4 lg:max-w-3xl">
          <WTFCard className="relative z-0 flex items-center justify-between p-8 md:flex-row lg:max-w-3xl">
            <Sparkles className="absolute inset-0 z-0 h-full w-full" />
            <div className="z-10 flex flex-col gap-4 pr-0 md:pr-4 md:text-left">
              <div className="inline-block">
                I&apos;m a <span className="font-semibold">Front-End Engineer</span> based
                in <span className="font-semibold">Canada</span>.
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
              src="/assets/headshot-enhanced.jpg"
              className="not-prose z-10 box-content hidden aspect-square h-32 w-32 rounded-full bg-gradient-to-br from-blue-600 to-yellow-300 p-1 md:block"
              width={392}
              height={392}
              alt="My avatar"
            />
          </WTFCard>
        </Prose>
        <Separator />
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          <Stack>
            <h2 className="title">Latest Posts</h2>
            <Posts data={posts} limit={3} />
            <WTFCard className="my-8 p-4">
              <Link
                href="/blog"
                prefetch={false}
                className="text-lg font-medium hover:text-sky-500 focus:text-sky-500 dark:hover:text-sky-300 dark:focus:text-sky-300"
              >
                See <strong>all posts</strong> &rarr;
              </Link>
            </WTFCard>
          </Stack>
          <Stack>
            <h2 className="title">Video Tutorials</h2>
            <Videos limit={3} />
            <WTFCard className="my-8 p-4">
              <Link
                href="/videos"
                prefetch={false}
                className="text-lg font-medium hover:text-sky-500 focus:text-sky-500 dark:hover:text-sky-300 dark:focus:text-sky-300"
              >
                See <strong>all videos</strong> &rarr;
              </Link>
            </WTFCard>
          </Stack>
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
