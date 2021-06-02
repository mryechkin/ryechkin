import Link from 'next/link';
import { useRouter } from 'next/router';
import { SiGithub, SiLinkedin, SiTwitter, SiYoutube } from 'react-icons/si';

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

export default function Footer() {
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
        <div className="flex justify-center mt-12 space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={item.className}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-8 h-8" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-12 text-center dark:text-gray-100 text-gray-400 text-xs tracking-widest sm:text-sm">
          &copy; 2021 <span className="font-semibold">Mykhaylo Ryechkin</span>.
          <span className="ml-1 font-normal">All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
