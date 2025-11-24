import { cn } from '@/lib/utils';

export function Button({
  children,
  className,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={cn(
        'text-preset-3 font-preset-3 tracking-preset-3 leading-preset-3 px-5 py-2.5 border border-neutral-200 dark:border-neutral-600 rounded-preset-full bg-neutral-0 dark:bg-neutral-700 drop-shadow-button dark:drop-shadow-none disabled:drop-shadow-none hover:drop-shadow-none outline-none hover:opacity-70 dark:hover:opacity-100 dark:hover:bg-neutral-600 disabled:opacity-70 dark:disabled:opacity-100 dark:disabled:bg-neutral-600 focus-visible:drop-shadow-none focus-visible:shadow-button-focus dark:focus-visible:shadow-button-focus-dark active:shadow-button-active active:border-transparent dark:active:shadow-button-active-dark active:bg-red-700 dark:active:bg-red-400 active:text-neutral-0 dark:active:text-neutral-900 active:opacity-100 dark:active:border-transparent data-[active=true]:bg-red-700 data-[active=true]:text-neutral-0 dark:data-[active=true]:text-neutral-900 dark:data-[active=true]:bg-red-400 dark:data-[active=true]:border-transparent hover:data-[active=true]:bg-red-500 hover:data-[active=true]:opacity-100 dark:hover:data-[active=true]:bg-red-500 focus-visible:data-[active=true]:border-transparent focus-visible:data-[active=false]:shadow-button-focus-inactive transition-all',
        className
      )}
    >
      {children}
    </button>
  );
}
