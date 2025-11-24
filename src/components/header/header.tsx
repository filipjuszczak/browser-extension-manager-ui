import { Suspense } from 'react';
import { Logo } from '../logo';
import { ThemeSwitch } from './theme-switch';

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-neutral-0 dark:bg-neutral-800 rounded-preset-20 mb-10 lg:mb-16">
      <Logo />
      <Suspense>
        <ThemeSwitch />
      </Suspense>
    </header>
  );
}
