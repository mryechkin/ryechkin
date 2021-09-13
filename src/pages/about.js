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
      <div className="prose md:prose-md lg:prose-lg mx-auto max-w-full">
        <h1 className="retro mb-0">About Me</h1>
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
