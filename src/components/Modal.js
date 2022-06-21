import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

export default function Modal({ children, open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-20 overflow-y-auto" onClose={setOpen}>
        <div className="items-end justify-center block min-h-screen p-0 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-90" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-full overflow-hidden align-middle transition-all transform rounded-lg shadow-xl">
              <div className="absolute top-0 right-0 pt-1 pr-1 sm:pt-4 sm:pr-4">
                <button
                  type="button"
                  className="p-1 text-gray-200 rounded-full custom-focus bg-gray-900/75 hover:text-sky-300 focus:rounded-full"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="w-6 h-6 sm:h-8 sm:w-8" aria-hidden="true" />
                </button>
              </div>
              <div className="inline-flex items-center justify-center min-h-screen p-2 max-w-7xl sm:p-8">
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
