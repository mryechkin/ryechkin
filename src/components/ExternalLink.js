import cn from 'classnames/dedupe';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function ExternalLink({ alt, children, className, href, icon }) {
  return (
    <span className={cn(className, 'inline whitespace-nowrap')}>
      <a href={href} alt={alt} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      {icon || (
        <HiOutlineExternalLink
          data-testid="icon-external"
          className="inline-block h-6 w-6 pl-1 text-sky-300"
        />
      )}
    </span>
  );
}
