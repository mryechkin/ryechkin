import css from '@styled-system/css';
import cn from 'classnames/dedupe';
import styled from 'styled-components';

const Root = styled.div({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
});

export function Box({ children, css: _css, ...props }) {
  return (
    <Root css={css(_css)} {...props}>
      {children}
    </Root>
  );
}

export function Col({ center, children, className, end, start = true, ...props }) {
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

export function Row({ center, children, end, start = true, ...props }) {
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

export function Show({ children, fallback, when }) {
  return when ? children : fallback;
}

export function Hide({ children, fallback, when }) {
  return when ? fallback : children;
}
