import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import hammock from '../../public/assets/hammock.jpg';

import { Layout, SEO } from '@/components';
import { getDataBySlug } from '@/lib/data';
import { getMdxSource } from '@/lib/mdx';

export default function About({ data, source }) {
  return (
    <Layout slug="about">
      <SEO title={data.title} />
      <div className="prose md:prose-md lg:prose-lg z-10 inline-flex flex-col items-center justify-between mb-4 mt-2 mx-auto max-w-full text-center md:mb-8 md:mt-4">
        <div className="retro text-2xl sm:text-4xl md:text-5xl">About Me</div>
        <MDXRemote {...source} />
        {/* <div className="sm:pr-8">
          <MDXRemote {...source} />
        </div>
        <div className="hidden flex-shrink-0 sm:inline-flex sm:w-64 md:w-72">
          <Image src={hammock} alt="About me" quality={100} priority />
        </div> */}
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
