import Head from 'next/head';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import { DateDisplay, Layout, Tags } from '@/components';
import markdownToHtml from '@/lib/markdown';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

export default function Post({ isDark, setIsDark, postData }) {
  return (
    <Layout isDark={isDark} setIsDark={setIsDark} hideKylo>
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
      <h1>{postData.title}</h1>
      <div className="relative z-10 pb-2 text-center dark:text-gray-200 text-gray-600 text-base sm:text-lg">
        Published on
        <span className="px-2 font-semibold">
          <DateDisplay date={postData.date} />
        </span>
        by
        <span className="accent-no-bg ml-2">{postData.author.name}</span>
      </div>
      <Tags className="mt-4" list={postData.tags} />
      <div className="flex items-center justify-center mt-8">
        <Image src={`/blog/${postData.slug}.jpg`} height={334} width={640} />
      </div>
      <article
        className="prose md:prose-lg lg:prose-xl relative z-10 mx-auto py-4 dark:text-gray-50 text-gray-800 md:pt-8"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.id);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      postData: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          id: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
