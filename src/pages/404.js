import { Card } from '@wtf-ds/core';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

import Layout from 'src/components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="prose mx-auto pb-8 text-center md:prose-lg lg:prose-xl sm:mt-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center p-8">
            <FaExclamationTriangle className="h-10 w-10 text-rose-500 dark:text-rose-300" />
          </div>
          <h1 className="retro">Page Not Found.</h1>
          <Card>
            <p className="mx-auto max-w-5xl text-lg lg:text-xl">
              These aren&apos;t the droids you&apos;re looking for.
            </p>
          </Card>
          <Link className="mt-12" href="/" prefetch={false}>
            Go Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
