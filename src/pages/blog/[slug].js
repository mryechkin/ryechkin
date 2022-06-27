import { FaTwitter } from 'react-icons/fa';
import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { BackToTop, Counter, DateDisplay, Layout, SEO } from '@/components';
import { getAllPosts, getHeadings, getMdx, getRawFile, getReadingTime } from '@/lib/data';

export default function Post({ source }) {
  const { frontmatter } = source;
  const fullTitle = `Mykhaylo Ryechkin | ${frontmatter.title}`;
  const image = `https://www.misha.wtf/_next/image?url=%2Fblog%2F${frontmatter.slug}%2Fcover.png&w=1200&q=100`;
  const slug = `blog/${frontmatter.slug}`;

  return (
    <Layout>
      <Head>
        <title>{fullTitle}</title>
        <meta name="og:image" content={image} />
        <meta name="twitter:title" content={fullTitle} />
      </Head>
      <SEO
        image={image}
        title={frontmatter.title}
        description={frontmatter.summary}
        canonical={frontmatter.canonical}
        openGraph={{
          title: frontmatter.title,
          description: frontmatter.summary,
          url: frontmatter.canonical,
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
            publishedTime: frontmatter.date,
            authors: [frontmatter.author?.name],
            tags: frontmatter.seo,
            image,
          },
        }}
      />
      <div className="w-full max-w-full prose-sm prose dark:prose-invert sm:prose-base lg:prose-lg">
        <h1 className="retro">{frontmatter.title}</h1>
        <DateDisplay data={frontmatter} />
        <div className="max-w-xl mx-auto mt-8 shadow-md">
          <Image
            src={`/${slug}/cover.png`}
            className="bg-gray-900 rounded-lg"
            layout="responsive"
            height={627}
            width={1200}
            quality={100}
            priority
          />
        </div>
        <article className="py-4 text-gray-800 dark:text-gray-50 md:pt-8">
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
  const source = getRawFile(`/data/posts/${params.slug}.mdx`);
  const data = await getMdx(source);
  const headings = await getHeadings(source);

  return {
    props: {
      headings,
      source: {
        ...data,
        frontmatter: {
          ...data.frontmatter,
          readingTime: getReadingTime(source),
          slug: params.slug,
        },
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
          slug: post.data?.slug,
        },
      };
    }),
    fallback: false,
  };
}
