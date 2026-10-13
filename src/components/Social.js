import cn from 'classnames';
import { motion } from 'framer-motion';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGithub, SiYoutube } from 'react-icons/si';
import { twMerge } from 'tailwind-merge';

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
    icon: (props) => <FaLinkedinIn {...props} />,
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

export function SocialButton({ className, data }) {
  return (
    <motion.a
      key={data.name}
      href={data.href}
      target="_blank"
      rel="noopener noreferrer"
      title={data.name}
      aria-label={data.name}
      className={twMerge(
        'p-1 text-xl text-slate-700 hover:text-sky-300 focus:text-sky-300 dark:text-slate-200 dark:hover:text-sky-300 dark:focus:text-sky-300 sm:text-3xl',
        className,
      )}
      whileFocus={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="sr-only">{data.name}</span>
      <data.icon className="size-6 sm:size-7" aria-hidden="true" />
    </motion.a>
  );
}

export default function Social({ className, itemClassName }) {
  return (
    <div className={cn('flex gap-2', className)}>
      {social.map((item) => (
        <SocialButton key={item.name} className={itemClassName} data={item} />
      ))}
    </div>
  );
}
