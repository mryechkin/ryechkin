'use client';

import { useEffect, useState } from 'react';
import { Button } from '@wtf-ds/core';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import { CgSun } from 'react-icons/cg';
import { IoMoon } from 'react-icons/io5';

export default function DarkModeToggle({ className }) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const ariaLabel = `Toggle ${theme} mode`;

  return (
    <Button
      aria-label={ariaLabel}
      className={cn('rounded-full p-2', className)}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <CgSun className="h-6 w-6 text-rose-400" />
      ) : (
        <IoMoon className="h-6 w-6 text-indigo-500" />
      )}
    </Button>
  );
}
