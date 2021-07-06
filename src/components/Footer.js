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
      href: 'https://www.youtube.com/channel/UCWS51MbLHKtzEmYLtExyshQ',
      icon: (props) => <SiYoutube {...props} />,
    },
  ],
};

export default function Footer({ isDark, setIsDark }) {
  const router = useRouter();

  return (
    <footer>
      <div className="mx-auto pt-0 px-4 py-12 max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        {router.pathname !== '/' && (
          <nav className="flex flex-wrap justify-center pb-4 md:pb-8" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <Link href={item.href}>
                  <a>{item.name}</a>
                </Link>
              </div>
            ))}
          </nav>
        )}
        <div className="flex items-center justify-center my-4">
          <KyloRen isDark={isDark} />
        </div>
        <div className="flex justify-center space-x-6">
          <div className="flex justify-between px-2 w-full sm:px-8">
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
            <DarkModeToggle
              enabled={isDark}
              setEnabled={() => {
                setIsDark(!isDark);
              }}
            />
          </div>
        </div>
        <div className="sm:text-md mt-8 text-center text-gray-700 dark:text-indigo-200 text-sm tracking-wide sm:mt-10">
          <div className="flex flex-grow-0 flex-wrap items-center justify-center my-4 sm:my-8">
            <span>&copy; 2021</span>
            <span className="ml-1 font-semibold">Mykhaylo Ryechkin</span>.
            <span className="ml-1 font-normal">All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
