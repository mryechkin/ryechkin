import { HiOutlineExternalLink } from 'react-icons/hi';
import Image from 'next/image';

import Card from './Card';
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
  return items.map((item) => (
    <Card key={item.imageUrl} item={item} isExternal>
      <h1 className="inline-flex items-center justify-center dark:text-cyan-300 text-cyan-500">
        {item.title}
        <HiOutlineExternalLink className="inline-block" />
      </h1>
      <p>{item.description}</p>
    </Card>
  ));
}
