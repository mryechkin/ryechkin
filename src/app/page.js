import Image from 'next/image';
import Link from 'next/link';
import { FiSmile } from 'react-icons/fi';

import Card from 'src/components/Card';
import Counter from 'src/components/Counter';
import FeatureCard from 'src/components/FeatureCard';
import Layout from 'src/components/Layout';
import Pill from 'src/components/Pill';
import Prose from 'src/components/Prose';
import RickRoll from 'src/components/RickRoll';
import Separator from 'src/components/Separator';
import Sparkles from 'src/components/Sparkles';
import { sortByDate, VIDEOS } from 'src/components/Videos';
import { getAllDataByPath } from 'src/lib/data';

function toPostItem({ date, readingTime, slug, summary, tags, title }) {
  return {
    href: `/blog/${slug}`,
    imageUrl: `/blog/${slug}/cover.png`,
    date,
    readingTime,
    summary,
    tags,
    title,
  };
}

function getTagCounts(posts) {
  const counts = {};
  posts.forEach(({ data }) => {
    data.tags?.forEach((tag) => {
      counts[tag] = (counts[tag] ?? 0) + 1;
    });
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function SeeAll({ children, href }) {
  return (
    <Card className="prose mt-6 inline-block p-4">
      <Link href={href} prefetch={false}>
        See <strong>{children}</strong>
      </Link>
    </Card>
  );
}

export default function Home() {
  const posts = getAllDataByPath('blog');
  const [featuredPost, ...recentPosts] = posts;
  const [featuredVideo, ...moreVideos] = sortByDate(VIDEOS);
  const tags = getTagCounts(posts);

  return (
    <Layout className="!max-w-7xl">
      <section className="mx-auto flex max-w-3xl flex-col items-center">
        <h1 className="flex flex-wrap items-center justify-center font-sans text-4xl font-bold tracking-tighter md:text-5xl">
          <span className="retro p-2">Hey, I&apos;m</span>
          <span className="retro-thin ml-1 md:ml-2">Mykhaylo.</span>
        </h1>
        <Prose className="mt-1 w-full text-center md:mt-4">
          <Card className="relative z-0 flex items-center justify-between p-8 md:flex-row">
            <Sparkles className="absolute inset-0 z-0 size-full" />
            <div className="z-10 flex flex-col gap-4 md:text-left">
              <div className="inline-block">
                I&apos;m a <span className="font-bold">Software Engineer</span> based in{' '}
                <span className="font-bold">Canada</span>.
              </div>
              <span className="inline-block">
                I write code for a living, drink more coffee than I probably should, and
                listen to a lot of electronic music in the process. <RickRoll />
              </span>
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Link href="/about" prefetch={false} className="font-bold">
                  Read More
                </Link>
              </div>
            </div>
            <Image
              src="/assets/headshot-enhanced.jpg"
              className="not-prose z-10 box-content hidden aspect-square size-32 rounded-full bg-gradient-to-br from-blue-600 to-yellow-300 p-1 md:block"
              width={540}
              height={540}
              alt="Avatar"
            />
          </Card>
        </Prose>
      </section>

      <Separator />

      <section aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="title text-center">
          Featured
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-8 xl:grid-cols-2">
          {featuredPost && (
            <div className="flex flex-col gap-3">
              <div className="section-label">Latest Post</div>
              <FeatureCard
                className="h-full"
                item={toPostItem(featuredPost.data)}
                vertical
              />
            </div>
          )}
          {featuredVideo && (
            <div className="flex flex-col gap-3">
              <div className="section-label">Latest Video</div>
              <FeatureCard
                className="h-full"
                item={featuredVideo}
                isExternal
                isVideo
                vertical
              />
            </div>
          )}
        </div>
      </section>

      <Separator />

      <div className="grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-8">
        <section aria-labelledby="recent-posts-heading" className="text-center">
          <h2 id="recent-posts-heading" className="title">
            More Posts
          </h2>
          <div className="mt-6 flex flex-col gap-6">
            {recentPosts.slice(0, 5).map(({ data }) => (
              <FeatureCard key={data.slug} item={toPostItem(data)} hideCover />
            ))}
          </div>
          <SeeAll href="/blog">all posts</SeeAll>
        </section>
        <section aria-labelledby="more-videos-heading" className="text-center">
          <h2 id="more-videos-heading" className="title">
            More Videos
          </h2>
          <div className="mt-6 flex flex-col gap-6">
            {moreVideos.slice(0, 5).map((video) => (
              <FeatureCard key={video.href} item={video} hideCover isExternal isVideo />
            ))}
          </div>
          <SeeAll href="/videos">all videos</SeeAll>
        </section>
      </div>

      <Separator />

      <section aria-labelledby="topics-heading" className="text-center">
        <h2 id="topics-heading" className="title">
          Browse by Topic
        </h2>
        <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {tags.map(([tag, count]) => (
            <li key={tag}>
              <Link
                href={`/search?q=${encodeURIComponent(tag)}`}
                prefetch={false}
                className="custom-focus inline-flex rounded-full transition-transform hover:-translate-y-0.5"
              >
                <Pill>
                  {tag}
                  <span className="ml-2 opacity-60">{count}</span>
                </Pill>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 inline-flex w-full items-center justify-center">
        Thanks for stopping by
        <span className="pl-2 text-2xl text-blue-400 dark:text-rose-400">
          <FiSmile />
        </span>
      </div>
      <div className="flex items-center justify-center pt-12">
        <Counter slug="index" />
      </div>
    </Layout>
  );
}
