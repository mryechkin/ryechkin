import { FaTwitter } from 'react-icons/fa';
import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { DateDisplay, ExternalLink, Layout, SEO } from '@/components';
import { getAllPosts, getPostBySlug } from '@/lib/data';
import { getMdxSource } from '@/lib/mdx';

export default function Post({ postData, source }) {
  const fullTitle = `Mykhaylo Ryechkin | ${postData.title}`;
  const image = `https://www.misha.wtf/_next/image?url=%2Fblog%2F${postData.slug}%2Fcover.png&w=1200&q=100`;

  return (
    <Layout hideKylo slug={`blog/${postData.slug}`}>
      <Head>
        <title>{fullTitle}</title>
        <meta name="og:image" content={image} />
        <meta name="twitter:title" content={fullTitle} />
      </Head>
      <SEO
        title={postData.title}
        description={postData.summary}
        canonical={postData.canonical}
        openGraph={{
          title: postData.title,
          description: postData.summary,
          url: postData.canonical,
          images: [
            {
              url: image,
              width: 1200,
              height: 627,
              alt: fullTitle,
            },
          ],
          type: 'article',
          article: {
            publishedTime: postData.date,
            authors: [postData.author?.name],
            tags: postData.seo,
            image,
          },
        }}
      />
      <div className="w-full max-w-full prose lg:prose-lg">
        <h1 className="retro">{postData.title}</h1>
        <div className="inline-flex z-10 flex-col sm:flex-row justify-center sm:justify-evenly items-center w-full text-sm text-center text-gray-600 dark:text-gray-200">
          <DateDisplay date={postData.date} showIcon />
          <ExternalLink
            href={postData.author?.url}
            icon={<FaTwitter className="inline-block pl-1 w-6 h-6 text-sky-accent" />}
          >
            {postData.author?.name}
          </ExternalLink>
        </div>
        <div className="mx-auto mt-8 max-w-xl shadow-md">
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
        <article className="z-10 py-4 md:pt-8 text-gray-800 dark:text-gray-50">
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
