import Card from './Card';

export default function Posts({ data, preview }) {
  if (preview)
    return (
      <Card
        key={data[0].data.slug}
        item={{
          href: `/blog/${data[0].data.slug}`,
          imageUrl: `/blog/${data[0].data.slug}/cover.png`,
          date: data[0].data.date,
          readingTime: data[0].data.readingTime,
          summary: data[0].data.summary,
          tags: data[0].data.tags,
          title: data[0].data.title,
        }}
      />
    );

  return data?.length
    ? data.map((post) => {
        const { date, readingTime, summary, slug, tags, title } = post.data;
        return (
          <Card
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
    : null;
}
