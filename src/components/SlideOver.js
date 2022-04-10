import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/outline';
import cn from 'classnames/dedupe';

export default function SlideOver({ className, open, setOpen, title, children }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 flex max-w-full pointer-events-none">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-full pointer-events-auto sm:max-w-md">
                <div className="flex flex-col h-full py-6 overflow-y-scroll bg-gray-100 shadow-xl dark:bg-gray-800">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-2xl font-black retro-thin">
                        {title}
                      </Dialog.Title>
                      <div className="flex items-center ml-3 h-7">
                        <button
                          type="button"
                          className="p-2 rounded-md custom-focus"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XCircleIcon
                            className="w-8 h-8 text-rose-400"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={cn('relative h-full', className)}>{children}</div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
