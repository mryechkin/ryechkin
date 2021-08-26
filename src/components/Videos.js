import Image from 'next/image';

import ExternalLink from './ExternalLink';
import GradientContainer from './GradientContainer';

const items = [
  {
    title: 'ESLint + Prettier shared config for Next.js',
    href: 'https://youtu.be/tsPXN4mJGSc',
    description:
      'Learn how to create and publish a custom ESLint and Prettier shared config, for use in Next.js projects!',
    imageUrl: '/thumbs/eslint-prettier-config.jpg',
  },
  {
    title: 'HeadlessUI Slideover',
    href: 'https://youtu.be/7GAvtWmVRSY',
    description:
      'In this video we look at how to update the existing implementation of the Tailwind UI Slide Over component that I showed in an earlier video, with the ready-made React component that is now available out of the box from Tailwind UI.',
    imageUrl: '/thumbs/headlessui-slideover.jpg',
  },
  {
    title: 'Icon Library with SVGR and Rollup',
    href: 'https://youtu.be/v0ZLEy1SE-A',
    description:
      'Learn how to build your own SVG icon component library for React! In this video, we use SVGR and Rollup to make a publishable NPM package, with components generated directly from your SVG files.',
    imageUrl: '/thumbs/svgr-icon-library.jpg',
  },
  {
    title: 'Accessible SlideOver with Tailwind UI and React-Aria',
    href: 'https://youtu.be/9EqJ-xgmIHc',
    description:
      'In this video I show you everything you need to build the "Slide Over" from Tailwind UI as a fully accessible React component, using Tailwind CSS, React-Aria and Framer Motion.',
    imageUrl: '/thumbs/accessible-slideover.jpg',
  },
];

export default function Videos() {
  return (
    <div className="flex flex-wrap gap-2 items-start justify-around w-full">
      {items?.length &&
        items.map((item) => (
          <div
            key={item.imageUrl}
            className="flex flex-col items-center justify-between max-w-sm"
          >
            <GradientContainer className="max-w-xs">
              <Image src={item.imageUrl} alt={item.title} width={1280} height={720} />
            </GradientContainer>
            <h3>
              <ExternalLink href={item.href}>{item.title}</ExternalLink>
            </h3>
            <p className="inline-flex my-0 px-2 text-left text-base">
              {item.description}
            </p>
          </div>
        ))}
    </div>
  );
}
