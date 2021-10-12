import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { Layout, SEO, Separator, Tags } from '@/components';
import { getDataBySlug } from '@/lib/data';
import { getMdxSource } from '@/lib/mdx';

export default function About({ data, source }) {
  return (
    <Layout slug="about">
      <SEO title={data.title} />
      <div className="prose lg:prose-lg mx-auto max-w-full">
        <h1>About Me</h1>
        <div className="flex items-start justify-between">
          <div className="lg:pr-4">
            <div className="min-h-48 lg:hidden">
              <Image
                src="/assets/hammock-wide.jpg"
                alt="About me"
                width={1200}
                height={360}
                priority
              />
            </div>
            <MDXRemote {...source} />
            <Tags
              className="mt-4"
              list={[
                'React',
                'Next.js',
                'Supabase',
                'Rollup',
                'Vite',
                'Storybook',
                'Stitches',
                'Tailwind',
              ]}
            />
            <p className="text-center lg:text-right">
              ...and always looking to learn more!
            </p>
          </div>
          <div className="hidden flex-shrink-0 pt-12 sm:w-52 lg:inline-flex lg:w-56">
            <Image
              src="/assets/hammock.jpg"
              alt="About me"
              width={480}
              height={960}
              priority
            />
          </div>
        </div>
        <Separator />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const post = getDataBySlug('about');
  const source = await getMdxSource(post);

  return {
    props: {
      data: post.data,
      source,
    },
  };
}
