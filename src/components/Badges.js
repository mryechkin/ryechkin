import cn from 'classnames/dedupe';

export default function Badges({ className, data }) {
  return (
    <div className={cn('z-10 flex flex-wrap items-center justify-center', className)}>
      {data?.map((badge) => (
        <span className="inline-flex items-center mx-2 px-3 py-0.5 text-purple-800 text-sm font-medium bg-purple-100 rounded-full">
          {badge}
        </span>
      ))}
    </div>
  );
}
