/* eslint-disable no-param-reassign */
import { compileMDX } from '@wtf-ds/next-mdx-utils';

export async function getMDX({ components, source }) {
  const { content, frontmatter } = await compileMDX({
    source,
    components,
  });

  return { content, frontmatter };
}
