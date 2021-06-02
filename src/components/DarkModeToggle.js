import { Switch } from '@headlessui/react';
import { IoMoon, IoSunny } from 'react-icons/io5';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function DarkModeToggle({ enabled, setEnabled }) {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? 'bg-gray-900' : 'bg-gray-200',
        'relative inline-flex flex-shrink-0 w-11 h-7 border-2 border-transparent rounded-full focus:outline-none cursor-pointer transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      )}
    >
      <span className="sr-only">Change color mode</span>
      <span
        className={classNames(
          enabled ? 'translate-x-4 bg-gray-700' : 'translate-x-0 bg-white',
          'relative inline-block w-6 h-6 rounded-full pointer-events-none transform transition duration-200 ease-in-out ring-0'
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
          <IoSunny className="w-4 h-4 text-gray-400 bg-white" />
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
          <IoMoon className="w-4 h-4 text-indigo-400 bg-gray-700" />
        </span>
      </span>
    </Switch>
  );
}
