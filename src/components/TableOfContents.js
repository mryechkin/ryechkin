import cn from 'classnames/dedupe';

export default function TableOfContents({ className, headings }) {
  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <ul className="list-none">
        {headings.map((heading) => (
          <li className="!mt-0 !mb-0">
            <a
              className={cn('toc-link text-xs no-underline hover:text-sky-300', {
                'font-bold': heading.level === 2,
                'ml-2 font-medium': heading.level === 3,
                'ml-4 font-light': heading.level === 4,
              })}
              href={`#${heading.id}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
