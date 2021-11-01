import Card from './Card';

export default function Posts({ data }) {
  return data?.length
    ? data.map((post) => {
        const { date, summary, slug, tags, title } = post.data;
        return (
          <Card
            key={slug}
            item={{
              href: `/blog/${slug}`,
              imageUrl: `/blog/${slug}/cover.png`,
              date,
              summary,
              tags,
              title,
            }}
          />
        );
      })
    : null;
}
