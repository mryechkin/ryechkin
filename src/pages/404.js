import { FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';

import { Layout } from '@/components';

export default function NotFound() {
  return (
    <Layout>
      <div className="prose mx-auto pb-8 text-center sm:mt-20 md:prose-lg lg:prose-xl">
        <div className="flex items-center justify-center p-8">
          <FaExclamationTriangle className="h-10 w-10 text-rose-500 dark:text-rose-400" />
        </div>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
          Page Not Found.
        </h1>
        <p className="mx-auto mt-6 max-w-5xl text-base lg:text-lg">
          These aren&apos;t the droids you&apos;re looking for.
        </p>
        <Link href="/">
          <a>← Home</a>
        </Link>
      </div>
    </Layout>
  );
}
