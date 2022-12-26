import Balancer from 'react-wrap-balancer';
import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import BackToTop from 'src/components/BackToTop';
import Counter from 'src/components/Counter';
import DateDisplay from 'src/components/DateDisplay';
import Layout from 'src/components/Layout';
import MDX from 'src/components/MDX';
import SEO from 'src/components/SEO';
import Tags from 'src/components/Tags';
import {
  getAllPosts,
  getHeadings,
  getMdx,
  getRawFile,
  getReadingTime,
} from 'src/lib/data';

export default function Post({ source = {} }) {
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
        title={frontmatter?.title}
        description={frontmatter?.summary}
        canonical={frontmatter?.canonical}
        openGraph={{
          title: frontmatter?.title,
          description: frontmatter?.summary,
          url: frontmatter?.canonical,
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
            publishedTime: frontmatter?.date,
            authors: [frontmatter?.author?.name],
            tags: frontmatter?.seo,
            image,
          },
        }}
      />
      <div className="prose prose-sm w-full max-w-full dark:prose-invert sm:prose-base lg:prose-lg">
        <h1 className="retro">
          <Balancer>{frontmatter.title}</Balancer>
        </h1>
        {frontmatter?.tags?.length && (
          <Tags
            className="my-6 w-full items-center justify-center"
            list={frontmatter?.tags}
          />
        )}
        <DateDisplay data={frontmatter} />
        <div className="mx-auto mt-8 max-w-2xl shadow-md">
          <Image
            alt={frontmatter.title}
            src={`/${slug}/cover.png`}
            className="rounded-lg bg-gray-900 object-cover"
            width={1200}
            height={627}
            quality={90}
            priority
          />
        </div>
        <article className="pb-4 text-gray-800 dark:text-gray-50">
          <MDXRemote {...source} components={MDX} />
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
  const source = getRawFile(`/src/data/posts/${params.slug}.mdx`);

  if (!source) {
    return { props: {}, notFound: true };
  }

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
