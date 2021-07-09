import Head from 'next/head';

import { DateDisplay, Layout } from '@/components';
import markdownToHtml from '@/lib/markdown';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

export default function Post({ isDark, setIsDark, postData }) {
  return (
    <Layout isDark={isDark} setIsDark={setIsDark} hideKylo>
      <Head>
        <title>{postData.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={postData.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:title" content={postData.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="misha.wtf" />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.description} />
      </Head>
      <h1>{postData.title}</h1>
      <div className="relative z-10 pb-8 text-center dark:text-gray-200 text-gray-600 text-base sm:text-lg">
        Published by <span className="accent leading-tight">{postData.author.name}</span>{' '}
        on{' '}
        <span className="font-semibold">
          <DateDisplay dateString={postData.date} />
        </span>
      </div>
      <article
        className="prose lg:prose-xl relative z-10 mx-auto pb-4 dark:text-gray-50 text-gray-800"
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
