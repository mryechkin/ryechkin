import { memo } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import cn from 'classnames/dedupe';

const MyDisclosure = memo(({ title, children, className }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={cn(
              'custom-focus button-outline flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-2 dark:bg-slate-900',
              open && '!border-pink-500',
              className
            )}
          >
            <span className="text-sm uppercase tracking-widest">{title}</span>
            <ChevronDownIcon className={cn('h-5 w-5', open && 'rotate-180 transform')} />
          </Disclosure.Button>
          <Disclosure.Panel>{children}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
});

export default Object.assign(MyDisclosure, { Button: Disclosure.Button });
