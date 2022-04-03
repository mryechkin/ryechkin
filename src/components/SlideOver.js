import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/outline';
import cn from 'classnames/dedupe';

export default function SlideOver({ className, open, setOpen, title, children }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className={cn('fixed inset-0 overflow-hidden', className)}
        open={open}
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-400"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-400"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 transition-opacity bg-gray-800 bg-opacity-75" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 flex max-w-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-400"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-400"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-xs bg-gray-50 bg-circuit-light dark:bg-gray-800 dark:bg-circuit-dark">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-400"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-400"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 flex">
                    <button
                      type="button"
                      className="p-2 text-gray-300 rounded-md custom-focus hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XCircleIcon className="w-8 h-8 text-rose-400" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-col h-full overflow-y-scroll shadow-xl">
                  <div className="h-14 bg-gray-50 dark:bg-gray-800" />
                  {title && (
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        {title}
                      </Dialog.Title>
                    </div>
                  )}
                  <div className="relative h-full bg-gradient-to-b from-gray-50 via-transparent to-gray-50 dark:from-gray-800 dark:via-transparent dark:to-gray-800">
                    {children}
                  </div>
                  <div className="px-8 h-14 bg-gray-50 dark:bg-gray-800" />
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
