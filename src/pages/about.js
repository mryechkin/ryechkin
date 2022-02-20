import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { Layout, SEO, Separator, Tags } from '@/components';
import { getDataBySlug } from '@/lib/data';
import { getMdxSource } from '@/lib/mdx';
import { yearsToDate } from '@/lib/utils';

export default function About({ data, source }) {
  const experience = yearsToDate('05/01/2009');

  return (
    <Layout slug="about">
      <SEO title={data.title} />
      <div className="prose mx-auto max-w-full lg:prose-lg">
        <h1>About Me</h1>
        <div className="flex items-start justify-between">
          <div className="text-center lg:pr-4 lg:text-left ">
            <div className="lg:hidden">
              <Image
                src="/assets/hammock-wide.jpg"
                alt="About me"
                width={1200}
                height={360}
                priority
              />
            </div>
            <MDXRemote {...source} scope={{ experience }} />
            <Tags
              className="justify-center"
              list={[
                'React',
                'Next.js',
                'Supabase',
                'Rollup',
                'Storybook',
                'Styled Components',
                'Tailwind',
              ]}
            />
          </div>
          <div className="hidden flex-shrink-0 pt-4 sm:w-52 lg:inline-flex lg:w-56">
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
