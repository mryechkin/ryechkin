import { SiGithub, SiLinkedin, SiTwitter, SiYoutube } from 'react-icons/si';
import cn from 'classnames';
import { motion } from 'framer-motion';

import Counter from './Counter';
import DarkModeToggle from './DarkModeToggle';
import KyloRen from './KyloRen';
import { Nav } from './Menu';

const social = [
  {
    name: 'GitHub',
    className: 'social-github',
    href: 'https://github.com/mryechkin',
    icon: (props) => <SiGithub {...props} />,
  },
  {
    name: 'LinkedIn',
    className: 'social-linkedin',
    href: 'https://ca.linkedin.com/in/mryechkin',
    icon: (props) => <SiLinkedin {...props} />,
  },
  {
    name: 'Twitter',
    className: 'social-twitter',
    href: 'https://twitter.com/misha_wtf',
    icon: (props) => <SiTwitter {...props} />,
  },
  {
    name: 'YouTube',
    className: 'social-youtube',
    href: 'https://www.youtube.com/c/MykhayloRyechkin',
    icon: (props) => <SiYoutube {...props} />,
  },
];

export default function Footer({ className, hideKylo, setConfetti, slug }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn('w-screen', className)}>
      <div className="w-full max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-8 lg:py-12">
          <Counter slug={slug} />
        </div>
        {!hideKylo && (
          <div className="flex items-center justify-center pt-8 lg:pt-12">
            <KyloRen setConfetti={setConfetti} />
          </div>
        )}
        <div className="flex flex-col items-center justify-center w-full px-2 py-8 space-y-8 lg:flex-row lg:justify-between lg:space-y-0 lg:pt-0">
          <span className="flex">
            {social.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 mx-1 text-xl text-gray-700 rounded-md hover:text-sky-300 focus:text-sky-300 dark:text-gray-200 dark:hover:text-sky-300 dark:focus:text-sky-300 sm:mx-2 sm:text-3xl"
                whileFocus={{ scale: 1.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6 sm:h-8 sm:w-8" aria-hidden="true" />
              </motion.a>
            ))}
          </span>
          <span className="flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-center">
            <Nav className="text-sm lg:mr-4" aria-label="Bottom navigation" />
            <DarkModeToggle className="mt-8 lg:mt-0" />
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center flex-grow-0 py-6 text-xs tracking-tight text-gray-800 border-t border-indigo-100 border-dotted dark:border-indigo-900 dark:text-white sm:mt-8 sm:py-8">
          <span>&copy; {year}</span>
          <span className="ml-1 font-semibold tracking-wide">Mykhaylo Ryechkin</span>.
          <span className="ml-1 font-normal">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
