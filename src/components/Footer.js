import { SiGithub, SiLinkedin, SiTwitter, SiYoutube } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// import { HiHeart } from 'react-icons/hi';
import { DarkModeToggle } from '@/components';

const navigation = {
  main: [{ name: 'Home', href: '/' }],
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
          <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <Link href={item.href}>
                  <a>{item.name}</a>
                </Link>
              </div>
            ))}
          </nav>
        )}
        <div className="flex justify-center mt-4 space-x-6 sm:mt-8">
          <div className="flex justify-between px-2 w-full sm:px-8">
            <span className="flex">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:hover:text-indigo-400 p-2 text-gray-800 dark:text-indigo-200 hover:text-indigo-500 text-xl sm:text-3xl"
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
        <div className="sm:text-md mt-8 text-center text-gray-800 dark:text-indigo-200 text-sm tracking-wide sm:mt-10">
          <div className="hidden my-8 sm:inline-flex sm:flex-grow-0 sm:items-center sm:justify-center">
            <span>&copy; 2021</span>
            <span className="ml-1 font-semibold">Mykhaylo Ryechkin</span>.
            <span className="ml-1 font-normal">All rights reserved.</span>
          </div>
          <div className="inline-flex items-center justify-center my-4 font-normal sm:hidden">
            &copy; 2021 Mykhaylo Ryechkin. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
