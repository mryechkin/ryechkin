import { FaTwitter } from 'react-icons/fa';
import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { DateDisplay, ExternalLink, Layout, SEO } from '@/components';
import { getAllPosts, getPostBySlug } from '@/lib/data';
import { getMdxSource } from '@/lib/mdx';

export default function Post({ postData, source }) {
  return (
    <Layout hideKylo slug={`blog/${postData.slug}`}>
      <Head>
        <title>{`Mykhaylo Ryechkin | ${postData.title}`}</title>
      </Head>
      <SEO
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
            image: `https://www.misha.wtf/_next/image?url=%2Fblog%2F${postData.slug}%2Fcover.png&w=1200&q=100`,
          },
        }}
      />
      <div className="prose lg:prose-lg w-full max-w-full">
        <h1 className="retro">{postData.title}</h1>
        <div className="z-10 inline-flex flex-col items-center justify-center w-full text-center dark:text-gray-200 text-gray-600 text-sm sm:flex-row sm:justify-evenly">
          <DateDisplay date={postData.date} showIcon />
          <ExternalLink
            href={postData.author?.url}
            icon={
              <FaTwitter className="inline-block w-4 h-4 dark:text-cyan-300 text-cyan-500" />
            }
          >
            {postData.author?.name}
          </ExternalLink>
        </div>
        <div className="mt-8 mx-auto max-w-xl shadow-md">
          <Image
            src={`/blog/${postData.slug}/cover.png`}
            className="bg-gray-900 rounded-lg"
            layout="responsive"
            height={627}
            width={1200}
            quality={100}
            priority
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
  const post = getPostBySlug(params.slug);
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
          slug: post.data?.slug,
        },
      };
    }),
    fallback: false,
  };
}
