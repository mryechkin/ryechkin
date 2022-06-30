import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { Counter, HeroContainer, Layout, SEO } from '@/components';
import { getMdx, getRawFile, getReadingTime } from '@/lib/data';
import { yearsToDate } from '@/lib/utils';

export default function About({ source }) {
  const experience = yearsToDate('05/01/2009');
  const { frontmatter } = source;

  return (
    <Layout slug="about">
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <div className="prose mx-auto max-w-full lg:prose-lg">
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
            </div>
            <div className="hidden shrink-0 lg:inline-flex lg:w-72">
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
      </div>
      <div className="flex items-center justify-center pt-8">
        <Counter slug="blog" />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const fileContents = getRawFile('/src/data/about.mdx');
  const data = await getMdx(fileContents);

  return {
    props: {
      source: {
        ...data,
        frontmatter: {
          ...data.frontmatter,
          readingTime: getReadingTime(data),
          slug: 'about',
        },
      },
    },
  };
}
