import Card from './Card';

export default function Posts({ data, preview, count = 4 }) {
  return (
    <div className="mt-4 flex flex-wrap items-start justify-start gap-6">
      {data?.length
        ? data.map((post, i) => {
            if (i > count) {
              return null;
            }

            const { date, readingTime, summary, slug, tags, title } = post.data;
            const isPreview = (i === 0 && preview) || !preview;

            return (
              <Card
                className={!isPreview && 'w-full grow md:w-[calc(50%-12px)]'}
                hideCover={!isPreview}
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
