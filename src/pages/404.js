import Image from 'next/image';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div>
      <div className="mx-auto px-4 py-16 max-w-7xl sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="flex items-center justify-center text-red-500 text-xl font-semibold tracking-wide uppercase">
            <FaExclamationTriangle />
          </h2>
          <p className="mt-4 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
            Page Not Found.
          </p>
          <p className="mt-6 mx-auto max-w-xl text-xl">
            The page you are looking for doesn&apos;t exist.
          </p>
          <p className="my-6">
            <Link href="/">
              <a>Go Home.</a>
            </Link>
          </p>
          <Image src="/assets/banner4.jpg" width={150} height={225} />
        </div>
      </div>
    </div>
  );
}
