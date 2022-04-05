import { FiSmile } from 'react-icons/fi';
import { MDXRemote } from 'next-mdx-remote';

import {
  Card,
  Counter,
  Layout,
  PeaceSign,
  Posts,
  Prose,
  SEO,
  Separator,
} from '@/components';
import { getAllPosts, getDataBySlug } from '@/lib/data';
import { useConfetti } from '@/lib/hooks';
import { getMdxSource } from '@/lib/mdx';

const videos = [
  {
    title: 'ESLint + Prettier shared config for Next.js',
    date: '2021-05-15',
    href: 'https://youtu.be/tsPXN4mJGSc',
    summary:
      'Learn how to create and publish a custom ESLint and Prettier shared config, for use in Next.js projects!',
    imageUrl: '/thumbs/eslint-prettier-config.jpg',
    tags: ['ESLint', 'Prettier', 'Next.js'],
  },
  {
    title: 'HeadlessUI Slideover',
    date: '2021-04-20',
    href: 'https://youtu.be/7GAvtWmVRSY',
    summary:
      'In this video we look at how to update the existing implementation of the Tailwind UI Slide Over component that I showed in an earlier video, with the ready-made React component that is now available out of the box from Tailwind UI.',
    imageUrl: '/thumbs/headlessui-slideover.jpg',
    tags: ['Headless UI', 'Tailwind UI', 'TailwindCSS'],
  },
  {
    title: 'Icon Library with SVGR and Rollup',
    date: '2021-02-23',
    href: 'https://youtu.be/v0ZLEy1SE-A',
    summary:
      'Learn how to build your own SVG icon component library for React! In this video, we use SVGR and Rollup to make a publishable NPM package, with components generated directly from your SVG files.',
    imageUrl: '/thumbs/svgr-icon-library.jpg',
    tags: ['Rollup', 'SVGR', 'Libraries'],
  },
  {
    title: 'Accessible SlideOver with Tailwind UI and React-Aria',
    date: '2021-01-21',
    href: 'https://youtu.be/9EqJ-xgmIHc',
    summary:
      'In this video I show you everything you need to build the "Slide Over" from Tailwind UI as a fully accessible React component, using Tailwind CSS, React-Aria and Framer Motion.',
    imageUrl: '/thumbs/accessible-slideover.jpg',
    tags: ['React Aria', 'Tailwind UI', 'Accessibility', 'a11y'],
  },
];

export default function Home({ data, posts, source }) {
  const [confetti, setConfetti] = useConfetti();

  return (
    <Layout confetti={confetti}>
      <SEO title={data.title} />
      <div className="inline-flex items-end justify-center w-full">
        <div className="flex-shrink-0 w-full max-w-3xl font-sans text-4xl font-bold tracking-tighter sm:text-center sm:text-5xl md:text-6xl">
          <span className="flex flex-wrap items-center justify-center">
            <span className="flex items-center justify-center p-2 text-yellow-500 dark:text-yellow-300">
              Hey
              <PeaceSign
                className="p-2"
                innerClassName="h-6 w-6 sm:w-10 sm:h-10"
                setConfetti={setConfetti}
              />
              I&apos;m
            </span>
            <span className="inline-flex ml-1 retro sm:ml-2">Mykhaylo.</span>
          </span>
        </div>
      </div>
      <div className="items-center justify-center mx-auto">
        <Prose className="text-center lg:max-w-3xl">
          <MDXRemote {...source} />
        </Prose>
        <Separator />
        <h1 className="title">Latest Posts</h1>
        <Posts data={posts} />
        <Separator />
        <h1 className="title">Videos</h1>
        <div className="pb-4 md:pb-8">
          {videos.map((item) => (
            <Card key={item.imageUrl} item={item} isExternal isVideo />
          ))}
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
  const home = getDataBySlug('index');
  const source = await getMdxSource(home);

  return {
    props: {
      data: home.data,
      posts,
      source,
    },
  };
}
