import { HiOutlineExternalLink } from 'react-icons/hi';
import cn from 'classnames/dedupe';

export default function ExternalLink({ alt, href, children, className, icon }) {
  return (
    <span className={cn(className, 'inline')}>
      <a href={href} alt={alt} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      {icon || (
        <HiOutlineExternalLink
          data-testid="icon-external"
          className="inline-block pl-1 w-6 h-6 text-sky-accent"
        />
      )}
    </span>
  );
}
