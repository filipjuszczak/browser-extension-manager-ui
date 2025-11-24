'use client';

import dynamic from 'next/dynamic';
import { LoadingIcon } from '../icons/Loading';

const ThemeSwitchComponent = dynamic(() => import('./suspended-theme-switch'), {
  ssr: false,
  loading: () => (
    <button
      className="bg-neutral-100 dark:bg-neutral-700 rounded-preset-12 p-3.5"
      disabled={true}
    >
      <LoadingIcon />
    </button>
  )
});

export function ThemeSwitch() {
  return <ThemeSwitchComponent />;
}
