import { FaExclamationTriangle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components';

export default function NotFound() {
  return (
    <Layout>
      <div className="prose md:prose-lg lg:prose-xl mx-auto pb-8 text-center sm:mt-20">
        <div className="flex items-center justify-center p-8">
          <FaExclamationTriangle className="w-10 h-10 dark:text-rose-400 text-rose-500" />
        </div>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
          Page Not Found.
        </h1>
        <p className="mt-6 mx-auto max-w-5xl text-lg">
          These aren&apos;t the droids you&apos;re looking for.
        </p>
        <p className="pb-4 sm:pb-8">
          <Link href="/">
            <a>← Home</a>
          </Link>
        </p>
        <Image src="/assets/404.jpg" width={150} height={225} />
      </div>
    </Layout>
  );
}
