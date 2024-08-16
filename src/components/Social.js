import cn from 'classnames';
import { motion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGithub, SiLinkedin, SiYoutube } from 'react-icons/si';

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
    href: 'https://twitter.com/mryechkin',
    icon: (props) => <FaXTwitter {...props} />,
  },
  {
    name: 'YouTube',
    className: 'social-youtube',
    href: 'https://www.youtube.com/c/MykhayloRyechkin',
    icon: (props) => <SiYoutube {...props} />,
  },
];

export default function Social({ className }) {
  return (
    <span className={cn('flex', className)}>
      {social.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 p-2 text-xl text-slate-700 hover:text-sky-300 focus:text-sky-300 dark:text-slate-200 dark:hover:text-sky-300 dark:focus:text-sky-300 sm:mx-2 sm:text-3xl"
          whileFocus={{ scale: 1.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />
        </motion.a>
      ))}
    </span>
  );
}
