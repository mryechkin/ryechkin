/* This example requires Tailwind CSS v2.0+ */
import { Switch } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function IconToggle({ enabled, setEnabled, OnIcon, OffIcon }) {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? 'bg-gray-600' : 'bg-gray-200',
        'relative inline-flex flex-shrink-0 w-11 h-7 border-2 border-transparent rounded-full focus:outline-none cursor-pointer transition-colors duration-200 ease-in-out focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          enabled ? 'translate-x-4 bg-gray-200' : 'translate-x-0 bg-white',
          'relative inline-block w-6 h-6 rounded-full shadow pointer-events-none transform transition duration-200 ease-in-out ring-0'
        )}
      >
        <span
          className={classNames(
            enabled
              ? 'opacity-0 ease-out duration-100'
              : 'opacity-100 ease-in duration-200',
            'absolute inset-0 flex items-center justify-center w-full h-full transition-opacity'
          )}
          aria-hidden="true"
        >
          <OffIcon className="w-4 h-4 text-gray-600 bg-white" />
        </span>
        <span
          className={classNames(
            enabled
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100',
            'absolute inset-0 flex items-center justify-center w-full h-full transition-opacity'
          )}
          aria-hidden="true"
        >
          <OnIcon className="w-4 h-4 text-gray-600 bg-gray-200" />
        </span>
      </span>
    </Switch>
  );
}
