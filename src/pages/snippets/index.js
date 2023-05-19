import Card from 'src/components/Card';
import Counter from 'src/components/Counter';
import HeroContainer from 'src/components/HeroContainer';
import Layout from 'src/components/Layout';
import Prose from 'src/components/Prose';
import SEO from 'src/components/SEO';
import Separator from 'src/components/Separator';
import { getAllSnippets } from 'src/lib/data';

export default function Blog({ snippets }) {
  return (
    <Layout>
      <SEO title="Snippets" />
      <Prose>
        <h1 className="retro py-2 text-5xl">Snippets</h1>
        <HeroContainer>
          <div className="text-center lg:max-w-3xl">
            <p>
              This is a collection of code snippets, components and hooks that I use in my
              projects.
            </p>
            <p>Feel free to use in your own!</p>
          </div>
        </HeroContainer>
      </Prose>
      <Separator />
      <div className="mx-auto flex max-w-lg flex-col gap-8">
        {snippets?.length
          ? snippets.map((snippet) => {
              const { summary, slug, tags, title } = snippet.data;
              return (
                <Card
                  key={slug}
                  item={{ href: `/snippets/${slug}`, summary, tags, title }}
                />
              );
            })
          : null}
      </div>
      <div className="flex items-center justify-center py-8">
        <Counter slug="snippets" />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const snippets = getAllSnippets();
  return {
    props: {
      snippets,
    },
  };
}
