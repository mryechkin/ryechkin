import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';

import { Badges, DateDisplay, ExternalLink, Layout } from '@/components';
import { getAllPosts, getPostBySlug } from '@/lib/data';
import { getMdxSource } from '@/lib/mdx';

export default function Post({ postData, source }) {
  return (
    <Layout hideKylo slug={postData.slug}>
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
      <div className="prose md:prose-md lg:prose-lg w-full max-w-full">
        <h1 className="retro">{postData.title}</h1>
        <div className="z-10 pb-2 text-center dark:text-gray-200 text-gray-600 text-base sm:text-lg">
          <span className="px-1 font-semibold">
            <DateDisplay date={postData.date} />
          </span>
        </div>
        <div className="z-20 mt-8 mx-auto max-w-xl">
          <Image
            src={`/blog/${postData.slug}.jpg`}
            layout="responsive"
            height={334}
            width={640}
            quality={100}
          />
        </div>
        <article className="z-10 py-4 dark:text-gray-50 text-gray-800 md:pt-8">
          <MDXRemote {...source} />
        </article>
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
