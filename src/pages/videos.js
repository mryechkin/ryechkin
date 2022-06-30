import {
  Counter,
  HeroContainer,
  Layout,
  Prose,
  SEO,
  Separator,
  Videos,
} from '@/components';

export default function VideosPage() {
  return (
    <Layout>
      <SEO title="Videos" />
      <Prose>
        <h1 className="retro py-2 text-5xl">Videos</h1>
        <HeroContainer>
          <div className="text-center lg:max-w-3xl">
            <p>
              Here you will find some of the coding tutorials that I&apos;ve recorded.
            </p>
            <p>
              Most of these are things I&apos;ve recently learned, and wanted to share
              with others while it was fresh in my mind.
            </p>
            <p>
              As they say, the best way to learn something is to teach it to someone else.
            </p>
          </div>
        </HeroContainer>
      </Prose>
      <Separator />
      <div className="my-8 pb-4">
        <Videos />
      </div>
      <div className="flex items-center justify-center py-8">
        <Counter slug="videos" />
      </div>
    </Layout>
  );
}
