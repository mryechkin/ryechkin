import cn from 'classnames/dedupe';

const FooBar = ({ children, className }) => (
  <div className={cn('foo-bar', className)}>{children}</div>
);

export default FooBar;
