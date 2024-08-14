import { readFile } from 'fs/promises';
import { join } from 'path';

import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

import BackToTop from 'src/components/BackToTop';
import Counter from 'src/components/Counter';
import DateDisplay from 'src/components/DateDisplay';
import Layout from 'src/components/Layout';
import MDX from 'src/components/MDX';
import TableOfContents from 'src/components/TableOfContents';
import Tags from 'src/components/Tags';
import { getAllDataByPath, getReadingTime } from 'src/lib/data';
import { compileMDX, getHeadings } from 'src/lib/mdx';

export async function generateMetadata({ params: { slug } }) {
  const fullPath = join(process.cwd(), `src/data/blog/${slug}.mdx`);
  const source = await readFile(fullPath, 'utf8');
  const { data } = matter(source);

  const title = data?.title ? `Mykhaylo Ryechkin | ${data.title}` : 'Mykhaylo Ryechkin';
  const description = data?.summary;
  const image = `https://www.misha.wtf/_next/image?url=%2Fblog%2F${slug}%2Fcover.png&w=1200&q=100`;

  const openGraph = {
    title,
    description,
    image,
    type: 'article',
    article: {
      publishedTime: data?.date,
      modifiedTime: data?.modified,
      authors: [data?.author?.name],
      tags: data?.seo,
      image,
    },
    url: data?.canonical,
    images: [
      {
        url: image,
        width: 1200,
        height: 627,
        alt: title,
      },
    ],
  };

  const twitter = {
    card: 'summary_large_image',
    creator: '@mryechkin',
    images: [image],
    description,
    title,
  };

  return { title, description, openGraph, twitter, locale: 'en_CA', type: 'website' };
}

export default async function Post({ params: { slug } }) {
  const fullPath = join(process.cwd(), `src/data/blog/${slug}.mdx`);
  const source = await readFile(fullPath, 'utf8');
  const { content, frontmatter } = await compileMDX({ source, components: MDX });
  const headings = await getHeadings(source);

  frontmatter.readingTime = getReadingTime(source);

  return (
    <Layout
      className="!max-w-6xl border-x border-slate-200 bg-slate-50/90 backdrop-blur dark:border-slate-950 dark:bg-slate-900/90 md:px-8 lg:px-16 xl:px-20"
      showHomeButton
    >
      <article className="prose prose-sm relative w-full max-w-full dark:prose-invert sm:prose-base lg:prose-lg">
        <div className="flex items-baseline justify-center gap-2 pb-8 pt-4">
          &larr;
          <Link className="text-sm" href="/blog">
            Back to Blog
          </Link>
        </div>
        <h1 className="retro">{frontmatter.title}</h1>
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
            src={`/blog/${slug}/cover.png`}
            className="border-outline rounded-lg bg-slate-900 object-cover shadow-retro dark:shadow-retro-dark"
            width={1200}
            height={627}
            quality={90}
            priority
          />
        </div>
        <TableOfContents className="sticky top-0" headings={headings} />
        <div>{content}</div>
        <div className="flex items-center justify-center p-2">
          <BackToTop />
        </div>
        <div className="flex items-center justify-center py-8">
          <Counter slug={slug} />
        </div>
      </article>
    </Layout>
  );
}

export async function generateStaticParams() {
  const posts = getAllDataByPath('src/data/blog');
  return posts.map((post) => ({
    params: {
      slug: post.data?.slug,
    },
  }));
}
