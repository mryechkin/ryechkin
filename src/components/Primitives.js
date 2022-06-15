import css from '@styled-system/css';
import cn from 'classnames/dedupe';
import styled from 'styled-components';

const Root = styled.div({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
});

export function Box({ css: _css, children, ...props }) {
  return (
    <Root css={css(_css)} {...props}>
      {children}
    </Root>
  );
}

export function Col({ center, className, end, children, start = true, ...props }) {
  return (
    <div
      className={cn('flex flex-col items-center', className, {
        'justify-start': start,
        'justify-center': center,
        'justify-end': end,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

export function Row({ center, end, children, start = true, ...props }) {
  return (
    <div
      className={cn('flex items-center', {
        'justify-start': start,
        'justify-center': center,
        'justify-end': end,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

export function Show({ fallback, when, children }) {
  return when ? children : fallback;
}

export function Hide({ fallback, when, children }) {
  return when ? fallback : children;
}
