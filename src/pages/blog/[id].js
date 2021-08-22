import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';

import { Badges, Counter, DateDisplay, Layout } from '@/components';
import { getAllPosts, getPostBySlug } from '@/lib/data';
import { getMdxSource } from '@/lib/mdx';

export default function Post({ postData, source }) {
  return (
    <Layout hideKylo>
      <Head>
        <title>{`Mykhaylo Ryechkin | ${postData.title}`}</title>
      </Head>
      <NextSeo
        title={postData.title}
        description={postData.summary}
        canonical={postData.canonical}
        openGraph={{
          title: postData.title,
          description: postData.summary,
          url: postData.canonical,
          type: 'article',
          article: {
            publishedTime: postData.date,
            authors: [postData.author?.name],
            tags: postData.seo,
            image:
              postData.image ||
              `https://www.misha.wtf/_next/image?url=%2F${postData.slug}.jpg&w=1200&q=627`,
          },
        }}
      />
      <h1 className="pt-8">{postData.title}</h1>
      <div className="relative z-10 pb-2 text-center dark:text-gray-200 text-gray-600 text-base sm:text-lg">
        Published on
        <span className="px-2 font-semibold">
          <DateDisplay date={postData.date} />
        </span>
        by
        <span className="accent-no-bg ml-2">{postData.author.name}</span>
      </div>
      <Badges className="mt-4" data={postData.tags} />
      <div className="z-20 mt-8 mx-auto max-w-xl">
        <Image
          src={`/blog/${postData.slug}.jpg`}
          layout="responsive"
          height={334}
          width={640}
          quality={100}
        />
      </div>
      <article className="prose md:prose-lg lg:prose-xl z-10 py-4 w-full max-w-full dark:text-gray-50 text-gray-800 md:pt-8">
        <MDXRemote {...source} />
      </article>
      <div className="flex items-center justify-center py-8 sm:py-12">
        <Counter slug={postData.slug} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.id);
  const source = await getMdxSource(post);

  return {
    props: {
      postData: post.data,
      source,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          id: post.data?.slug,
        },
      };
    }),
    fallback: false,
  };
}
