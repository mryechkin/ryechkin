import { SiGithub, SiLinkedin, SiTwitter, SiYoutube } from 'react-icons/si';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import Counter from './Counter';
import DarkModeToggle from './DarkModeToggle';
import KyloRen from './KyloRen';

const navigation = {
  main: [{ name: '← Home', href: '/' }],
  social: [
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
  ],
};

export default function Footer({ className, hideKylo, setConfetti, slug }) {
  const router = useRouter();

  return (
    <footer className={cn('mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8', className)}>
      {router.pathname !== '/' && router.pathname !== '/404' && (
        <nav className="flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href}>
                <a>{item.name}</a>
              </Link>
            </div>
          ))}
        </nav>
      )}
      <div className="flex items-center justify-center pt-8 md:pb-4 md:pt-12">
        <Counter slug={slug} />
      </div>
      {!hideKylo && (
        <div className="flex items-center justify-center pt-8 md:pt-12">
          <KyloRen setConfetti={setConfetti} />
        </div>
      )}
      <div className="flex items-center justify-between px-2 py-8 w-full md:py-0">
        <span className="flex">
          {navigation.social.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:hover:text-cyan-100 dark:focus:text-cyan-100 mx-1 p-2 dark:text-cyan-200 focus:text-cyan-400 hover:text-cyan-400 text-gray-700 text-xl rounded-md sm:mx-2 sm:text-3xl"
              whileFocus={{ scale: 1.2 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
            </motion.a>
          ))}
        </span>
        <DarkModeToggle />
      </div>
      <div className="flex flex-grow-0 flex-wrap items-center justify-center py-6 dark:text-cyan-200 text-gray-700 text-xs tracking-tight border-t border-indigo-100 dark:border-indigo-900 opacity-75 sm:mt-8 sm:py-8">
        <span>&copy; 2021</span>
        <span className="ml-1 font-semibold tracking-wide">Mykhaylo Ryechkin</span>.
        <span className="ml-1 font-normal">All rights reserved.</span>
      </div>
    </footer>
  );
}
