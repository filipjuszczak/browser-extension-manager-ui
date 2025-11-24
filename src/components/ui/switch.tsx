'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer data-[state=checked]:bg-red-700 hover:data-[state=checked]:bg-red-500 dark:data-[state=checked]:bg-red-400 dark:hover:data-[state=checked]:bg-red-500 data-[state=unchecked]:bg-neutral-300 dark:data-[state=unchecked]:bg-neutral-600 inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-transparent transition-all outline-none disabled:cursor-not-allowed disabled:bg-neutral-100 focus-visible:shadow-switch-focus dark:focus-visible:shadow-switch-focus-dark',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'bg-neutral-0 pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%)] data-[state=unchecked]:translate-x-[10%]'
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
