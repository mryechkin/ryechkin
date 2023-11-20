'use client';

import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import components from 'src/components/MDX';

export default function MDXComponent({ code }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component components={components} />;
}
