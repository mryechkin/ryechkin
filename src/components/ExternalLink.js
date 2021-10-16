import { HiOutlineExternalLink } from 'react-icons/hi';
import cn from 'classnames/dedupe';

export default function ExternalLink({ alt, href, children, className }) {
  return (
    <>
      <span className={cn(className, 'inline')}>
        <a href={href} alt={alt} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
        <HiOutlineExternalLink
          data-testid="icon-external"
          className="inline-block dark:text-cyan-300 text-cyan-500"
        />
      </span>
    </>
  );
}
