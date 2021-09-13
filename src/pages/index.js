import { FiSmile } from 'react-icons/fi';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';

import { Layout, More, PeaceSign, SEO, Separator, Videos } from '@/components';
import { getDataBySlug } from '@/lib/data';
import { useConfetti } from '@/lib/hooks';
import { getMdxSource } from '@/lib/mdx';

export default function Home({ data, source }) {
  const [confetti, setConfetti] = useConfetti();

  return (
    <Layout confetti={confetti}>
      <SEO title={data.title} />
      <div className="inline-flex items-end justify-center py-2 w-full sm:py-4">
        <div className="flex-shrink-0 w-full max-w-3xl font-sans text-4xl font-bold tracking-tighter sm:text-center sm:text-5xl md:text-6xl">
          <span className="flex flex-wrap items-center justify-center">
            <span className="flex items-center justify-center p-2 dark:text-yellow-300 text-yellow-400">
              Hey
              <PeaceSign
                className="p-2"
                innerClassName="h-6 w-6 sm:w-10 sm:h-10 md:w-12 md:h-12"
                setConfetti={setConfetti}
              />
              I&apos;m
            </span>
            <span className="retro inline-flex ml-1 sm:ml-2">Mykhaylo.</span>
          </span>
        </div>
      </div>
      <div className="items-center justify-center mx-auto max-w-full text-center">
        <div className="mx-auto max-w-4xl">
          <div className="prose md:prose-md lg:prose-lg py-4 w-full max-w-full sm:text-center">
            <MDXRemote {...source} />
          </div>
          <span className="inline-flex items-center justify-center">
            <Link href="/about" passHref>
              <a className="nav-link">About Me &rarr;</a>
            </Link>
          </span>
        </div>
        <Separator />
        <h1 className="retro py-2 text-left text-3xl sm:pb-4 sm:text-4xl md:text-5xl">
          Latest Videos
        </h1>
        <div className="pb-4 md:pb-8">
          <Videos />
        </div>
        <Separator />
        <div className="inline-flex items-center justify-center w-full">
          Thanks for stopping by
          <span className="pl-2 text-blue-400 dark:text-rose-400 text-2xl">
            <FiSmile />
          </span>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const post = getDataBySlug('index');
  const source = await getMdxSource(post);

  return {
    props: {
      data: post.data,
      source,
    },
  };
}
