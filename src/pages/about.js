import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { Counter, HeroContainer, Layout, SEO, Separator, Tags } from '@/components';
import { getDataBySlug } from '@/lib/data';
import { getMdxSource } from '@/lib/mdx';
import { yearsToDate } from '@/lib/utils';

export default function About({ data, source }) {
  const experience = yearsToDate('05/01/2009');

  return (
    <Layout slug="about">
      <SEO title={data.title} />
      <div className="max-w-full mx-auto prose lg:prose-lg">
        <h1>About Me</h1>
        <HeroContainer className="p-2 lg:p-4">
          <div className="flex items-start justify-between lg:items-center">
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
                className="justify-center pb-4"
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
            <div className="flex-shrink-0 hidden lg:inline-flex lg:w-72">
              <Image
                src="/assets/hammock.jpg"
                alt="About me"
                width={480}
                height={960}
                priority
              />
            </div>
          </div>
        </HeroContainer>
        <Separator />
      </div>
      <div className="flex items-center justify-center pt-8">
        <Counter slug="blog" />
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
