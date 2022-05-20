import Card from './Card';

const data = [
  {
    title: 'Recreating code editor from Chakra UI docs using React Live and TailwindCSS',
    date: '2022-05-20',
    duration: '43:18',
    href: 'https://youtu.be/Ld3W9aaNx1g',
    summary:
      'Recreate the live code editor from Chakra UI, built using React Live and TailwindCSS.',
    imageUrl: '/thumbs/live-code-editor.jpg',
    tags: ['Chakra UI', 'React Live', 'TailwindCSS'],
  },
  {
    title: 'ESLint + Prettier shared config for Next.js',
    date: '2021-05-15',
    duration: '20:07',
    href: 'https://youtu.be/tsPXN4mJGSc',
    summary:
      'Learn how to create and publish a custom ESLint and Prettier shared config, for use in Next.js projects!',
    imageUrl: '/thumbs/eslint-prettier-config.jpg',
    tags: ['ESLint', 'Prettier', 'Next.js'],
  },
  {
    title: 'HeadlessUI Slideover',
    date: '2021-04-20',
    duration: '12:01',
    href: 'https://youtu.be/7GAvtWmVRSY',
    summary:
      'In this video we look at how to update the existing implementation of the Tailwind UI Slide Over component that I showed in an earlier video, with the ready-made React component that is now available out of the box from Tailwind UI.',
    imageUrl: '/thumbs/headlessui-slideover.jpg',
    tags: ['Headless UI', 'Tailwind UI', 'TailwindCSS'],
  },
  {
    title: 'Icon Library with SVGR and Rollup',
    date: '2021-02-23',
    duration: '21:23',
    href: 'https://youtu.be/v0ZLEy1SE-A',
    summary:
      'Learn how to build your own SVG icon component library for React! In this video, we use SVGR and Rollup to make a publishable NPM package, with components generated directly from your SVG files.',
    imageUrl: '/thumbs/svgr-icon-library.jpg',
    tags: ['Rollup', 'SVGR', 'Libraries'],
  },
  {
    title: 'Accessible SlideOver with Tailwind UI and React-Aria',
    date: '2021-01-21',
    duration: '53:36',
    href: 'https://youtu.be/9EqJ-xgmIHc',
    summary:
      'In this video I show you everything you need to build the "Slide Over" from Tailwind UI as a fully accessible React component, using Tailwind CSS, React-Aria and Framer Motion.',
    imageUrl: '/thumbs/accessible-slideover.jpg',
    tags: ['React Aria', 'Tailwind UI', 'Accessibility', 'a11y'],
  },
];

export default function Videos() {
  return data.map((item) => <Card key={item.imageUrl} item={item} isExternal isVideo />);
}
