import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';

import { Counter, Layout } from '@/components';
import { getAllSnippets, getMdx, getRawFile } from '@/lib/data';

const BoxExample = `
() => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        p: "4",
      }}
    >
      <KyloRen />
    </Box>
  );
};
`;

export default function Snippets({ source }) {
  const { frontmatter } = source;
  const fullTitle = `Mykhaylo Ryechkin | ${frontmatter.title}`;
  const slug = `snippets/${frontmatter.slug}`;
  return (
    <Layout>
      <Head>
        <title>{fullTitle}</title>
        <meta name="twitter:title" content={fullTitle} />
      </Head>
      <div className="prose prose-sm w-full max-w-full dark:prose-invert sm:prose-base lg:prose-lg">
        <h1 className="retro">Snippets</h1>
        <h2>{frontmatter.title}</h2>
        <article className="py-4 text-gray-800 dark:text-gray-50 md:pt-8">
          <MDXRemote {...source} />
        </article>
        <div className="flex items-center justify-center py-8">
          <Counter slug={slug} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const source = getRawFile(`/data/snippets/${params.slug}.mdx`);
  const data = await getMdx(source, false);

  return {
    props: {
      source: {
        ...data,
        frontmatter: {
          ...data.frontmatter,
          slug: params.slug,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const snippets = getAllSnippets();

  return {
    paths: snippets.map((post) => {
      return {
        params: {
          slug: post.data?.slug,
        },
      };
    }),
    fallback: false,
  };
}
