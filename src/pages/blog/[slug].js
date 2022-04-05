import { FaTwitter as Twitter } from 'react-icons/fa';
import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { BackToTop, Counter, DateDisplay, ExternalLink, Layout, SEO } from '@/components';
import { getAllPosts, getPostBySlug } from '@/lib/data';
import { getMdxSource } from '@/lib/mdx';

export default function Post({ postData, source }) {
  const fullTitle = `Mykhaylo Ryechkin | ${postData.title}`;
  const image = `https://www.misha.wtf/_next/image?url=%2Fblog%2F${postData.slug}%2Fcover.png&w=1200&q=100`;
  const slug = `blog/${postData.slug}`;

  return (
    <Layout hideKylo slug={slug}>
      <Head>
        <title>{fullTitle}</title>
        <meta name="og:image" content={image} />
        <meta name="twitter:title" content={fullTitle} />
      </Head>
      <SEO
        image={image}
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
      <div className="w-full max-w-full prose-sm prose sm:prose-base lg:prose-lg">
        <h1 className="retro">{postData.title}</h1>
        <div className="z-10 inline-flex flex-col items-center justify-center w-full gap-2 text-sm text-center text-gray-600 dark:text-gray-200 sm:flex-row sm:justify-evenly">
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
            <DateDisplay date={postData.date} showIcon />
            {postData.readingTime?.text && (
              <div className="">{postData.readingTime.text}</div>
            )}
          </div>
          <ExternalLink
            alt={postData.author?.name}
            href={postData.author?.url}
            icon={
              <Twitter
                aria-hidden="true"
                className="ml-2 inline-block h-5 w-5 text-[#1d9bef]"
              />
            }
          >
            {postData.author?.name}
          </ExternalLink>
        </div>
        <div className="max-w-xl mx-auto mt-8 shadow-md">
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
        <article className="z-10 py-4 text-gray-800 dark:text-gray-50 md:pt-8">
          <MDXRemote {...source} />
        </article>
        <div className="flex items-center justify-center p-2">
          <BackToTop />
        </div>
        <div className="flex items-center justify-center py-8">
          <Counter slug={slug} />
        </div>
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
