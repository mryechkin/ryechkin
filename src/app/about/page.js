import { Card } from '@wtf-ds/core';
import Image from 'next/image';

import Counter from 'src/components/Counter';
import Layout from 'src/components/Layout';
import MDX from 'src/components/MDX';
import { getRawFile } from 'src/lib/data';
import { compileMDX } from 'src/lib/mdx';
import { yearsToDate } from 'src/lib/utils';

export const metadata = {
  title: 'Mykhaylo Ryechkin | About',
};

export default async function About() {
  const experience = yearsToDate('05/01/2009');
  const source = getRawFile('src/data/about.mdx');
  const { content } = await compileMDX({
    source,
    components: MDX,
    scope: { experience },
  });

  return (
    <Layout showHomeButton>
      <div className="prose mx-auto max-w-full py-6 lg:prose-lg">
        <h1>About Me</h1>
        <Card className="p-2 lg:p-8">
          <div className="flex items-start justify-between lg:items-center">
            <div className="text-center lg:pr-4 lg:text-left ">
              <div className="not-prose pb-8 lg:hidden">
                <Image
                  src="/assets/hammock-wide.jpg"
                  alt="Photo in a hammock"
                  className="rounded"
                  width={1200}
                  height={360}
                  priority
                />
              </div>
              {content}
            </div>
            <div className="not-prose hidden shrink-0 lg:inline-flex lg:w-72">
              <Image
                src="/assets/hammock.jpg"
                alt="Photo in a hammock"
                className="rounded"
                width={480}
                height={960}
                priority
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="flex items-center justify-center py-8">
        <Counter slug="blog" />
      </div>
    </Layout>
  );
}
