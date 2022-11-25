import Counter from '@/components/Counter';
import HeroContainer from '@/components/HeroContainer';
import Layout from '@/components/Layout';
import Prose from '@/components/Prose';
import SEO from '@/components/SEO';
import Separator from '@/components/Separator';
import Videos from '@/components/Videos';

export default function VideosPage() {
  return (
    <Layout>
      <SEO title="Videos" />
      <Prose>
        <h1 className="retro py-2 text-5xl">Videos</h1>
        <HeroContainer>
          <div className="text-center lg:max-w-3xl [&>p]:my-1">
            <p>Here you will find some of my coding tutorials.</p>
            <p>
              Most of these are things I&apos;ve had to learn at some point, and wanted to
              share with others while it was fresh in my mind.
            </p>
          </div>
        </HeroContainer>
      </Prose>
      <Separator />
      <div className="my-8 pb-4">
        <Videos sorted />
      </div>
      <div className="flex items-center justify-center py-8">
        <Counter slug="videos" />
      </div>
    </Layout>
  );
}
