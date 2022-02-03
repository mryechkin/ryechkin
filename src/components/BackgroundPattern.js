import cn from 'classnames';

export default function BackgroundPattern({ className }) {
  const color = cn('text-gray-100 dark:text-gray-600', className);

  return (
    <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-10/12">
      <div className="relative mx-auto h-full text-lg" aria-hidden="true">
        <svg
          className="absolute left-full top-12 -translate-x-32 transform"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className={color}
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={384}
            fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
          />
        </svg>
        <svg
          className="absolute right-full top-48 translate-x-32 transform"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className={color}
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={384}
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          className="absolute left-full top-96 -translate-x-64 translate-y-48 transform"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="d3eb07ae-5182-43e6-857d-35c643af9034"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className={color}
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={384}
            fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
          />
        </svg>
      </div>
    </div>
  );
}
