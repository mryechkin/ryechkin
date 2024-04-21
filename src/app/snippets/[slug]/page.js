import { getRawFile } from '@wtf-ds/next-mdx-utils';
import Link from 'next/link';

import Counter from 'src/components/Counter';
import Layout from 'src/components/Layout';
import MDX from 'src/components/MDX';
import { getAllSnippets } from 'src/lib/data';
import { getMDX } from 'src/lib/mdx';

export default async function Snippet({ params }) {
  const slug = `snippets/${params.slug}`;
  const source = getRawFile(`/src/data/${slug}.mdx`);
  const { content, frontmatter } = await getMDX({ source, components: MDX });

  return (
    <Layout
      className="!max-w-6xl border-x border-slate-200 bg-slate-50/90 backdrop-blur dark:border-slate-950 dark:bg-slate-900/90 md:px-8 lg:px-16 xl:px-20"
      showHomeButton
    >
      <div className="prose prose-sm w-full max-w-full dark:prose-invert sm:prose-base lg:prose-lg">
        <div className="flex justify-center pb-8 pt-4">
          <Link className="text-sm" href="/snippets">
            &larr; Back to Snippets
          </Link>
        </div>
        <h1 className="retro">{frontmatter.title}</h1>
        <div className="retro-thin flex justify-center text-3xl">Snippet</div>
        <article className="py-4 text-slate-800 dark:text-slate-50 md:pt-8">
          {content}
        </article>
        <div className="flex items-center justify-center py-8">
          <Counter slug={slug} />
        </div>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  const snippets = getAllSnippets();
  return snippets.map((snippet) => ({
    params: {
      slug: snippet.data?.slug,
    },
  }));
}
