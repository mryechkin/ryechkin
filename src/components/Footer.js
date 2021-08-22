import { SiGithub, SiLinkedin, SiTwitter, SiYoutube } from 'react-icons/si';
import Link from 'next/link';
import { useRouter } from 'next/router';

import DarkModeToggle from '@/components/DarkModeToggle';
import KyloRen from '@/components/KyloRen';

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
      href: 'https://twitter.com/mryechkin',
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

export default function Footer({ className, hideKylo }) {
  const router = useRouter();

  return (
    <footer className={className}>
      <div className="mx-auto max-w-5xl overflow-hidden">
        {router.pathname !== '/' && router.pathname !== '/404' && (
          <nav
            className="flex flex-wrap justify-center pt-8 sm:pt-12"
            aria-label="Footer"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <Link href={item.href}>
                  <a>{item.name}</a>
                </Link>
              </div>
            ))}
          </nav>
        )}
        {!hideKylo && (
          <div className="flex items-center justify-center pt-8 md:pt-12">
            <KyloRen />
          </div>
        )}
        <div className="flex justify-between px-4 py-8 w-full sm:px-8 md:py-0">
          <span className="flex">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:hover:text-gray-800 p-2 dark:text-cyan-200 hover:text-cyan-500 text-gray-600 text-xl sm:text-3xl"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-8 h-8" aria-hidden="true" />
              </a>
            ))}
          </span>
          <DarkModeToggle />
        </div>
        <div className="flex flex-grow-0 flex-wrap items-center justify-center my-6 text-blue-400 dark:text-rose-50 text-xs tracking-tight opacity-75 sm:my-8">
          <span>&copy; 2021</span>
          <span className="ml-1 font-semibold tracking-wide">Mykhaylo Ryechkin</span>.
          <span className="ml-1 font-normal">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
