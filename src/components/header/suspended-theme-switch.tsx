'use client';

import { useTheme } from 'next-themes';
import { SunIcon } from '../icons/Sun';
import { MoonIcon } from '../icons/Moon';

export default function SuspendedThemeSwitch() {
  const { theme, setTheme } = useTheme();

  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <button
      onClick={changeTheme}
      className="bg-neutral-100 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 rounded-preset-12 p-3.5 cursor-pointer outline-0 focus-visible:shadow-button-focus dark:focus-visible:shadow-button-focus-dark transition-all"
      aria-label={
        theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
      }
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
