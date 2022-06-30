import Link from 'next/link';

import Card from './Card';
import DateDisplay from './DateDisplay';

export default function Posts({ data, preview }) {
  return (
    <div className="flex flex-col items-start justify-center gap-6">
      {data?.length
        ? data.map((post, i) => {
            const { date, readingTime, summary, slug, tags, title } = post.data;

            if ((i === 0 && preview) || !preview) {
              return (
                <Card
                  className="w-full"
                  key={slug}
                  item={{
                    href: `/blog/${slug}`,
                    imageUrl: `/blog/${slug}/cover.png`,
                    date,
                    readingTime,
                    summary,
                    tags,
                    title,
                  }}
                />
              );
            }

            if (preview && i < 3) {
              return (
                <div className="prose flex w-full max-w-full flex-col items-start justify-between rounded-lg border border-indigo-200 bg-gray-50 py-2 px-4 dark:border-indigo-800 dark:bg-gray-900 sm:flex-row sm:items-center">
                  <Link href={`/blog/${slug}`}>
                    <a className="pr-2">{title}</a>
                  </Link>
                  <div className="">
                    <DateDisplay data={post.data} />
                  </div>
                </div>
              );
            }

            return null;
          })
        : null}
    </div>
  );
}
