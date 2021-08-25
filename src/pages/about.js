import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import header from '../../public/assets/header.jpg';

import { Layout, SEO } from '@/components';
import { getDataBySlug } from '@/lib/data';
import { getMdxSource } from '@/lib/mdx';

export default function About({ data, source }) {
  return (
    <Layout slug="about">
      <SEO title={data.title} />
      <div className="flex items-center justify-center mb-4 mt-2 mx-auto max-w-5xl md:mb-8 md:mt-4">
        <Image src={header} alt="Header Image" quality={100} priority />
      </div>
      <div className="z-10 mx-auto max-w-full text-center">
        <MDXRemote {...source} />
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
