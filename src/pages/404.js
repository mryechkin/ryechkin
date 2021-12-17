import { FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';

import { Layout } from '@/components';

export default function NotFound() {
  return (
    <Layout>
      <div className="pb-8 mx-auto sm:mt-20 text-center prose md:prose-lg lg:prose-xl">
        <div className="flex justify-center items-center p-8">
          <FaExclamationTriangle className="w-10 h-10 text-rose-500 dark:text-rose-400" />
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold sm:tracking-tight">
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
