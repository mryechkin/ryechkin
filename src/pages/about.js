import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { Layout, SEO, Separator, Tags } from '@/components';
import { getDataBySlug } from '@/lib/data';
import { getMdxSource } from '@/lib/mdx';

export default function About({ data, source }) {
  return (
    <Layout slug="about">
      <SEO title={data.title} />
      <div className="mx-auto max-w-full prose lg:prose-lg">
        <h1>About Me</h1>
        <div className="flex justify-between items-start">
          <div className="lg:pr-4">
            <div className="lg:hidden min-h-[length:12rem]">
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
              className="justify-center"
              list={[
                'React',
                'Next.js',
                'Supabase',
                'Rollup',
                'Vite',
                'Storybook',
                'Stitches',
                'Styled Components',
                'Tailwind',
              ]}
            />
          </div>
          <div className="hidden lg:inline-flex flex-shrink-0 pt-4 sm:w-52 lg:w-56">
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
