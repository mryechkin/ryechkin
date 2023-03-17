import Card from './Card';

export default function Posts({ data, preview, limit }) {
  return (
    <div className="mt-4 flex flex-wrap items-start justify-start gap-6">
      {data?.length
        ? data.map((post, i) => {
            if (i >= limit) {
              return null; // Only show up to a `limit` of posts
            }

            const { date, readingTime, summary, slug, tags, title } = post.data;
            const hideCover = preview && i > 0;

            return (
              <Card
                className={hideCover && 'w-full grow md:w-[calc(50%-12px)]'}
                hideCover={hideCover}
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
          })
        : null}
    </div>
  );
}
